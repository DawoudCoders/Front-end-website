const axios = require("axios");

function fetchArticles(query) {
  
  return axios
    .get("https://nc-news-example-seminar-3-7.herokuapp.com/api/articles", {
      params: {
        topic: query.topic,
        sort_by: query.sort_by,
        order: query.order,
      },
    })
    .then(({ data: { articles } }) => {
    
      return articles;
    });
}

export default fetchArticles;
