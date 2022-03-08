const axios = require("axios");

function fetchArticleById(articleId) {
  return axios
    .get(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/articles/${articleId}`
    )
    .then(({ data }) => {
      console.log(data.article);
      return data.article;
    });
}

export default fetchArticleById;
