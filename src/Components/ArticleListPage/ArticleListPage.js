import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "../../HelperFunctions/fetchArticles";
import fetchTopics from "../../HelperFunctions/fetchTopics";

function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchArticles().then((response) => {
      setArticles(response);
      setLoading(false);
      Promise.all([fetchArticles, fetchTopics]).then((values) => {
        setArticles(values[0]);
        setLoading(false);
        setTopics([1]);
      });
    });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h1 className="article-header">Articles List:</h1>
        <form>
          <label> Select Topic </label>
          <select>
            <option value="BMW"> BMW</option>
            <option value="Mercedes"> Mercedes</option>
            <option value="Audi"> Audi</option>
            <option value="Skoda"> Skoda</option>
          </select>
          <label> Select SortBy </label>
          <select>
            <option value="BMW"> BMW</option>
            <option value="Mercedes"> Mercedes</option>
            <option value="Audi"> Audi</option>
            <option value="Skoda"> Skoda</option>
          </select>
          <label> Select OrderBy </label>
          <select>
            <option value="ASC"> ASC</option>
            <option value="DESC"> DESC</option>
          </select>
        </form>
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
