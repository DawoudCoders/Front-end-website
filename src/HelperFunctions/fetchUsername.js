const axios = require("axios");

function fetchUsername(username) {
  return axios
    .get(
      `https://nc-news-example-seminar-3-7.herokuapp.com/api/users/${username}`
    )
    .then((data) => {
      console.log(data);
      return data;
    });
}

export default fetchUsername;
