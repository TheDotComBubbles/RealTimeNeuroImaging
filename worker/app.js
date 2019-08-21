const redisConnection = require("../configs/redis-connection");
const bluebird = require("bluebird");
const redis = bluebird.promisifyAll(require("redis"));
const client = bluebird.promisifyAll(redis.createClient());
const flat = require("flat");
const patients = require("./data");
const users = require("./userData");
const fs = require("fs-extra");

client.flushall();

      //worker for querying patients
  redisConnection.on("get-patients", async (data, channel) => {

    try {
        
        if(data.patient) renderPatientImages(data.patient);

        if(!typeof data.patient == "String") throw "Patient name must be a string"
        
        
        let keys= await client.keysAsync('*');
        
        let patientData = keys.map(async x => {


            let record = await client.hgetallAsync(x);

            unflat = await flat.unflatten(record);
            
            return unflat;
            
        });

        Promise.all(patientData).then((result) => {
            redisConnection.emit("patient-results", 
            {
                patientData: result
            });
        })
    
    } catch(error) {
        console.log("Error retreiving database results")
        redisConnection.emit("failure", 
            {
                error: error
            });
    }
  });

  redisConnection.on("newUser", async (data,channel) => {
        creds = {
            username: data.username, 
            password: data.password
        }
        let flattened = flat(creds);
      await client.hmsetAsync(data.username, flattened);
  })

  redisConnection.on("login", async (data, channel) => {
    let auth = false;
    try {
        let record = await client.hgetallAsync(data.username);
        if(record && record.password === data.password) auth=true
        redisConnection.emit("loginAttempt", {
            auth: auth
        });
    
    } catch(error) {
        console.log(error)
        redisConnection.emit("failure", 
            {
                error: error
            });
    }
  });
  
    //worker for intialization
    redisConnection.on("initialize", async (data, channel) => {
      try {
          await patients.map(async x=> {
              let flattened = flat(x);
              await client.hmsetAsync(x.id, flattened);
          })

          await users.map(async x=> {
            let flattened = flat(x);
            await client.hmsetAsync(x.username, flattened);
        })
          console.log("Redis Client Initialized...")
      }
      catch(error) {
          console.log("Error encountered loading data: " + error);
      }
    }, function() {
        redisConnection.emit("initialize", {
          message: null
        });      
    });
    
    renderPatientImages = (patient) => {

        let sourceDir = './worker/dicoms';
        let dstDir = './server/public/med3web/app/imaging';

        try {
            fs.readdir(dstDir, (error,files) => {
                if (error) throw "Error reading files from directory " + dstDir;
    
                for (let file of files) {
                    fs.remove(dstDir + '/' + file)
                }
            })
        }
        catch(error) {
            console.log(error);
        }

        fs.copy(sourceDir + '/' + patient, dstDir, function (error) {
            if (error) return console.error(error)
        });
    };
  
  

