import React from "react";
import { useContext } from "react";
import { UsernameContext } from "../../Contexts/UsernameContext";
import deleteComment from "../../HelperFunctions/deleteComment";

function CommentCard({ comments }) {
  console.log(comments,"------------");
  const username = useContext(UsernameContext);

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} >
              <li className="comment-card">
                <div >{comment.body}</div>
                <div>Posted By: {comment.author}</div>
                <div>Votes: {comment.votes}</div>
                {comment.author === "weegembump" && (
                  <button
                    onClick={() => {
                      deleteComment(comment.comment_id);
                    }}
                    className="delete-comment-button"
                  >
                    Delete your comment
                  </button>
                )}
              
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentCard;
