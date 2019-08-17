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

  socket.on('get', async function (data) {
    try {
      
      let response = await getPatients(data);

      io.emit('patients', {
        patientData: response
      });
    }
    catch(error) {
      console.error(error);
      socket.emit('searchResult', {error: "error"});
    }
  });

  redisConnection.on("loginAttempt", async (data, channel) => {
    socket.emit('loginAttempt', {
      auth: data.auth
    });
  });

  socket.on('login', async function (data) {
    try {

      redisConnection.emit("login", {
        username: data.username,
        password: data.password
      });
    }
    catch(error) {
      console.log(error);
    }
  });

  socket.on('newUser', async function(data) {
    redisConnection.emit("newUser", {
      username: data.username,
      password: data.password
    })
  });
});

let getPatients = async (data) => {
  return new Promise((fulfill, reject) => {

      redisConnection.on(
          "patient-results", 
          async (data, channel) => {
              fulfill(data.patientData);
      });

      
      if(data.patient) var patient = data.patient;

      redisConnection.emit("get-patients", {
        message: "patients",
        patient: patient
      });

      setTimeout(() => {
          reject(new Error("timed out"));
      }, 5000);
  });
};

server.listen(3000, () => {
  console.log("Express Server listening on port 3000...");
});