import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../../HelperFunctions/fetchArticles";

function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((response) => {
      setArticles(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h2>Articles List:</h2>
        
        <div>
          <ul>
            {articles.map((article, index) => {
              return (
                <li key={index}>
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
