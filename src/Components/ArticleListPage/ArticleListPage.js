import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../../HelperFunctions/fetchArticles";
import fetchTopics from "../../HelperFunctions/fetchTopics";
import ArticleDropDownMenus from "./ArticleDropDownMenus";
function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topicQuery, setTopicQuery] = useState([]);

  useEffect(() => {
    fetchArticles(topicQuery).then((response) => {
      setArticles(response);
      setLoading(false);
    });
  }, [topicQuery]);

  console.log(topicQuery);
  
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h1 className="article-header">Articles List:</h1>
        <ArticleDropDownMenus
          topicQuery={topicQuery}
          setTopicQuery={setTopicQuery}
        />
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
