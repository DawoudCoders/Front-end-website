const axios = require("axios");

function fetchTopics() {
  return axios
    .get("https://nc-news-example-seminar-3-7.herokuapp.com/api/topics")
    .then(({data:{topics}}) => {
      console.log(topics);
      return topics;
    });
}

export default fetchTopics;
