const axios = require("axios");

function fetchComments(articleId) {
  return axios
    .get(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then(({ data }) => {
       return data;
    });
}

export default fetchComments;
