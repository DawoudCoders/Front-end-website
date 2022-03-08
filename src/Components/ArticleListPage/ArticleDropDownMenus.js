import React from "react";

function ArticleDropDownMenus({ Query, setQuery }) {
  const handleTopicChange = (event) => {
    setQuery((currentQuery) => {
      let copyQuery = { ...currentQuery };
      copyQuery.topic = event.target.value;
      return copyQuery;
    });
  };
  const handleSortByChange = (event) => {
    setQuery((currentQuery) => {
      let copyQuery = { ...currentQuery };
      copyQuery.sort_by = event.target.value;
      return copyQuery;
    });
  };
  const handleOrderChange = (event) => {
    setQuery((currentQuery) => {
      let copyQuery = { ...currentQuery };
      copyQuery.order = event.target.value;
      return copyQuery;
    });
  };
  return (
    <div className="article-page-forms">
      <form>
        <label className="label-headers"> Select Topic </label>
        <select onChange={handleTopicChange}>
          <option value="coding"> Coding</option>
          <option value="football"> Football</option>
          <option value="cooking"> Cooking</option>
        </select>
        <label className="label-headers"> Select SortBy </label>
        <select onChange={handleSortByChange}>
          <option value="title"> Title</option>
          <option value="author"> Author</option>
          <option value="votes"> Votes</option>
          <option value="created_at"> Created At</option>
          <option value="comment_count"> Comment Count</option>
        </select>
        <label className="label-headers"> Select OrderBy </label>
        <select onChange={handleOrderChange}>
          <option value="DESC"> Desc</option>
          <option value="ASC"> Asc</option>
        </select>
      </form>
    </div>
  );
}

export default ArticleDropDownMenus;
