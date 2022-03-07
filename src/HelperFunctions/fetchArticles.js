const axios = require("axios");

function fetchArticles(topicQuery) {
  let url = "https://nc-news-example-seminar-3-7.herokuapp.com/api/articles";

  if (topicQuery) {
    url += topicQuery;
  }
  return axios.get(url).then(({ data: { articles } }) => {
    return articles;
  });
}

export default fetchArticles;
