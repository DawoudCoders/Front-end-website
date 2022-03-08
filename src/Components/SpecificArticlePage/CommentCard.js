import React from "react";

function CommentCard({ comments }) {
 
  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-card">
              <div>{comment.body}</div>
              <div>Posted By: {comment.author}</div>
              <div>Votes: {comment.votes}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentCard;
