import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchArticleById from "../../HelperFunctions/fetchArticleById";
import fetchComments from "../../HelperFunctions/fetchComments";
import CommentCard from "./CommentCard";
function SpecificArticlePage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleById(articleId)
      .then((response) => {
        setArticle(response);
      })
      .then(() => {
        return fetchComments(articleId);
      })
      .then(({ comments }) => {
        setComments(comments);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <h1 className="specific-article-headers">{article.title}</h1>
        <div className="specific-article-body">{article.body} </div>
        <h2 className="specific-article-headers"> Comments:</h2>
        <CommentCard comments={comments} />
      </div>
    );
  }
}

export default SpecificArticlePage;
