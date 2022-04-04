import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link className="article-link" to={`/${article.article_id}`}>
      <div className="article-card">

        <div className="article-title">
         {article.title}
        </div>

        <div className="article-lower">
        <div className="article-info">
          Topic: {article.topic}
          <br></br>
          Author: {article.author}
          <br></br>
          Created: {article.created_at}
        </div>
        <div className="article-ratings">
          Votes: {article.votes}
          <br></br>
          Comments: {article.comment_count}
        </div>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
