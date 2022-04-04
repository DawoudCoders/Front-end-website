const axios = require("axios");

function fetchTopics() {
  return axios
    .get("https://first-heroku-hosting-project.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      const arrayOfTopics = topics.map((topic) => {
        return topic.slug;
      });

      return arrayOfTopics;
    });
}

export default fetchTopics;
