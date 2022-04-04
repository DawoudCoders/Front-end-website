const axios = require("axios");

function postComment(articleId, body) {
  const username = sessionStorage.getItem("username");

  return axios
    .post(
      `https://first-heroku-hosting-project.herokuapp.com/api/articles/${articleId}/comments`,
      { body: body, username: username }
    )
    .then((response) => {
      return response;
    });
}

export default postComment;
