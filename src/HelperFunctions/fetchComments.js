const axios = require("axios");

function fetchComments(articleId) {
  return axios
    .get(
      `https://first-heroku-hosting-project.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then(({ data }) => {
       return data;
    });
}

export default fetchComments;
