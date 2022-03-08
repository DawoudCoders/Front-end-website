const axios = require("axios");

function postComment(articleId, body ) {
 
  return axios
    .post(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/articles/${articleId}/comments`,
      { body: body, username: "weegembump" }
    )
    .then((response) => {
    
      return response;
    })
    .catch((err) => {
      return err;
    });
}

export default postComment;
