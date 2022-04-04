const axios = require("axios");

function deleteComment(comment_id) {

  return axios
    .delete(
      `https://first-heroku-hosting-project.herokuapp.com/api/comments/${comment_id}`
    )
    .then((response) => {

      return response;
    });
}

export default deleteComment;

