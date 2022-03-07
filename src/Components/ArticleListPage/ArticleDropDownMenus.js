import React from "react";

function ArticleDropDownMenus({ topicQuery, setTopicQuery }) {
  const handleTopicChange = (event) => {
    setTopicQuery(event.target.value);
  };
  console.log(topicQuery);
  return (
    <div className="article-page-forms">
      <form>
        <label> Select Topic </label>
        <select onChange={handleTopicChange}>
          <option value="coding"> Coding</option>
          <option value="football"> Football</option>
          <option value="cooking"> Cooking</option>
        </select>
        <label> Select SortBy </label>
        <select>
          <option value="TITLE"> Title</option>
          <option value="TOPIC"> Topic</option>
          <option value="AUTHOR"> Author</option>
          <option value="VOTES"> Votes</option>
          <option value="CREATED_AT"> Created At</option>
          <option value="COMMENT_COUNT"> Comment Count</option>
        </select>
        <label> Select OrderBy </label>
        <select>
          <option value="ASC"> Asc</option>
          <option value="DESC"> Desc</option>
        </select>
      </form>
    </div>
  );
}

export default ArticleDropDownMenus;
