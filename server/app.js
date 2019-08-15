var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const redisConnection = require("../configs/redis-connection");
const path = require("path");


app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"))  
});

io.on('connection', function (socket) {

  socket.on('get', async function () {
    try {
      
      let response = await getPatients();

      console.log(response);

      io.emit('patients', {
        patientData: response
      });
    }
    catch(error) {
      console.error(error);
      socket.emit('searchResult', {error: "error"});
    }
  });
});

let getPatients = async () => { 
  console.log("here");
  return new Promise((fulfill, reject) => {

      redisConnection.on(
          "patient-results", 
          async (data, channel) => {
              fulfill(data.patientData);
      });
/*
      redisConnection.on(
          "failure", 
          async (data, channel) => {
              reject(new Error(data.error));
      })*/

      redisConnection.emit("get-patients", {
        message: "patients"
      });

      setTimeout(() => {
          reject(new Error("timed out"));
      }, 5000);
  });
};

server.listen(3000, () => {
  console.log("Express Server listening on port 3000...");
});