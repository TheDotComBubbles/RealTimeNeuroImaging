const redisConnection = require("../configs/redis-connection");
const bluebird = require("bluebird");
const redis = bluebird.promisifyAll(require("redis"));
const client = bluebird.promisifyAll(redis.createClient());
const flat = require("flat");
const patients = require("./data");

client.flushall();

      //worker for querying patients
  redisConnection.on("get-patients", async (data, channel) => {

    try {
        
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
  
    //worker for intialization
    redisConnection.on("initialize", async (data, channel) => {
      try {
          await patients.map(async x=> {
              let flattened = flat(x);
              await client.hmsetAsync(x.id, flattened);
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
  
  

