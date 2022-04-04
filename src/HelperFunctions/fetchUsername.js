const axios = require("axios");

function fetchUsername(username) {
  return axios
    .get(
      `https://first-heroku-hosting-project.herokuapp.com/api/users/${username}`
    )
    .then((data) => {
      return data;
    });
}

export default fetchUsername;
