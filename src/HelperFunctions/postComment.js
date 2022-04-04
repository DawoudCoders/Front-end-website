const axios = require("axios");

function postComment(articleId, body) {
  const username = sessionStorage.getItem("username");

  return axios
    .post(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/articles/${articleId}/comments`,
      { body: body, username: username }
    )
    .then((response) => {
      return response;
    });
}

export default postComment;
