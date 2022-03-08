import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link to={`/${article.article_id}`}>
      <div className="article-card">
        TITLE: {article.title}
        <br></br>
        TOPIC: {article.topic}
        <br></br>
        AUTHOR: {article.author}
        <br></br>
        VOTES: {article.votes}
        <br></br>
        CREATED: {article.created_at}
        <br></br>
        COMMENT COUNT: {article.comment_count}
        <br></br>
      </div>
    </Link>
  );
}

export default ArticleCard;
