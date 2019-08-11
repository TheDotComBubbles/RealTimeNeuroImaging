const redisConnection = require("../configs/redis-connection");
const axios = require("axios");

//worker for querying id
redisConnection.on("search", async (data, channel) => {

    try {
        let pixaBayResult = await pixaBay(data.searchQuery);
        
        let urls = pixaBayResult.data.hits;

        let urlAndTitle = [];
        urls.map(value => {
            urlAndTitle.push({
                url: value.largeImageURL,
                alt: value.tags
            });
        })
        
        redisConnection.emit("query-completed", 
            {
                messageId: data.messageId,
                searchResult: urlAndTitle
            });

    } catch(error) {
        redisConnection.emit("failure", 
            {
                messageId: data.messageId,
                error: error
            });
    }
  });

  //pixabay query
  async function pixaBay(query) {

    var API_KEY = '13268820-e322cf4626725ebb7159f116b';

    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(query);
    
    let responseData = await axios.get(URL);
    
    return responseData;
  }

