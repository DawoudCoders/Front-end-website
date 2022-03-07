import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      Article ID: {article.article_id}
      <br></br>
      title: {article.title}
      <br></br>
      topic: {article.topic}
      <br></br>
      author: {article.author}
      <br></br>
      votes: {article.votes}
      <br></br>
      created at: {article.created_at}
      <br></br>
      comment count: {article.comment_count}
      <br></br>
    </div>
  );
}

export default ArticleCard;
