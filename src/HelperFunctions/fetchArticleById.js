const axios = require("axios");

function fetchArticleById(articleId) {
  return axios
    .get(
      `https://first-heroku-hosting-project.herokuapp.com/api/articles/${articleId}`
    )
    .then(({ data }) => {
     
      return data.article;
    });
}

export default fetchArticleById;
