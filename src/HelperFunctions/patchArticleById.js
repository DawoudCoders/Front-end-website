const axios = require("axios");

function patchArticleById(article_id, voteChange) {
  return axios
    .patch(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/articles/${article_id}`,
      { inc_votes: voteChange }
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    
}

export default patchArticleById;
