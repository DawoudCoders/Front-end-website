import React from "react";

function CommentCard({ comments }) {
  console.log(comments);
  return (
    <div >
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comment-card">
              <div >{comment.body}</div>
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
