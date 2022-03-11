const axios = require("axios");

function deleteComment(comment_id) {

  return axios
    .delete(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/comments/${comment_id}`
    )
    .then((response) => {
      console.log(response);
      return response;
    });
}

export default deleteComment;
