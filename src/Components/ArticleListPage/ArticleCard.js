import React from "react";

function ArticleCard({ article }) {
  return (
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
  );
}

export default ArticleCard;
