import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../../HelperFunctions/fetchArticles";
import ArticleDropDownMenus from "./ArticleDropDownMenus";

function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState({
    topic: "coding",
    sort_by: "title",
    order: "DESC",
  });

  useEffect(() => {
    fetchArticles(query).then((response) => {
      setArticles(response);
      setLoading(false);
    });
  }, [query]);



  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h1 className="article-header">Articles List:</h1>
        <ArticleDropDownMenus query={query} setQuery={setQuery} />
        <div>
          <ul>
            {articles.map((article) => {
              return (
                <li key={article.article_id}>
                  <ArticleCard article={article} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArticleListPage;
