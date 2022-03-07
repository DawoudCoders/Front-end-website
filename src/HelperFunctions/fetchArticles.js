const axios = require("axios");

function fetchArticles() {
  return axios
    .get("https://nc-news-example-seminar-3-7.herokuapp.com/api/articles")
    .then(({data:{articles}}) => {
      console.log(articles);
      return articles;
    });
}

export default fetchArticles;
