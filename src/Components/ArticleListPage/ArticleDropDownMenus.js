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
          <option value="?topic=coding"> Coding</option>
          <option value="?topic=football"> Football</option>
          <option value="?topic=cooking"> Cooking</option>
        </select>
        <label> Select SortBy </label>
        <select onChange={handleTopicChange}>
          <option value="?sort_by=title"> Title</option>
          <option value="?sort_by=author"> Author</option>
          <option value="?sort_by=votes"> Votes</option>
          <option value="?sort_by=created_at"> Created At</option>
          <option value="?sort_by=comment_count"> Comment Count</option>
        </select>
        <label> Select OrderBy </label>
        <select onChange={handleTopicChange}>
          <option value="?order=ASC"> Asc</option>
          <option value="?order=DESC"> Desc</option>
        </select>
      </form>
    </div>
  );
}

export default ArticleDropDownMenus;
