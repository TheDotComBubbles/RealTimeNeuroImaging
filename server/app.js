var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const redisConnection = require("../configs/redis-connection");
const path = require("path");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"),);
});

io.on('connection', function (socket) {

  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
  });

  socket.on('search', async (searchInfo) => {
    
    try {
      let response = await search(searchInfo);

      io.emit('broadcast', {
        message: searchInfo.message,
        username: searchInfo.username,
        searchResponse: response});
    }
    catch(error) {
      console.log("ERROR: Unable to find results for " + searchInfo)
      socket.emit('searchResult', {searchResponse: "error"});
    }
  })
});

let search = async (searchInfo) => { 
  return new Promise((fulfill, reject) => {

      redisConnection.on(
          "query-completed", 
          async (data, channel) => {
              fulfill(data.searchResult);
      });

      redisConnection.on(
          "failure", 
          async (data, channel) => {
              reject(new Error(data.error));
      })

      redisConnection.emit("search", {
          searchQuery: searchInfo.searchQuery
      });

      setTimeout(() => {
          reject(new Error("timed out"));
      }, 5000);
  });
};

server.listen(3000, () => {
  console.log("Express Server listening on port 3000...");
});