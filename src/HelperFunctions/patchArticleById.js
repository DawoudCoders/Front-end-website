const axios = require("axios");

function patchArticleById(article_id, voteChange) {
  return axios
    .patch(
      `https://first-heroku-hosting-project.herokuapp.com/api/article/${article_id}`,
      { inc_votes: voteChange }
    )
    .then((response) => {
      return response;
    })
    
}

export default patchArticleById;
