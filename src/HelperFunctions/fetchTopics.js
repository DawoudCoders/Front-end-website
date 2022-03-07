const axios = require("axios");

function fetchTopics() {
  return axios
    .get("https://nc-news-example-seminar-3-7.herokuapp.com/api/topics")
    .then(({ data: { topics } }) => {
      const arrayOfTopics = topics.map((topic) => {
        return topic.slug;
      });

      return arrayOfTopics;
    });
}

export default fetchTopics;
