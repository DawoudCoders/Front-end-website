import React, { useState } from "react";
import { useContext } from "react";
import { UsernameContext } from "../../Contexts/UsernameContext";
import deleteComment from "../../HelperFunctions/deleteComment";

function CommentCard({ comments, setComments }) {
  const username = useContext(UsernameContext);
  const [deleteErr, setDeleteErr] = useState(null);
  const [restoredComment, setRestoredComment] = useState({});
  const [errCaught, setErrCaught] = useState(null);

  const handleDeleteComment = (commentId) => {
    setRestoredComment(() => {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].comment_id == commentId) {
          return comments[i];
        }
      }
    });
    setComments((currentComments) => {
      let filterArr = currentComments.filter((obj) => {
        return obj.comment_id != commentId;
      });

      return filterArr;
    });

    deleteComment(commentId); /* .catch((err) => {
      setComments((currentComments) => {
        console.log(currentComments);
        return [...currentComments, restoredComment];
      });
    }); */
  };

  /*  const restoreComments = () => {
    console.log("helloo");
    console.log(restoredComments)
  
  };
 */

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <li className="comment-card">
                <div>{comment.body} </div>
                <div>Posted By: {comment.author}</div>
                <div>Votes: {comment.votes}</div>
                {comment.author === "weegembump" && (
                  <button
                    onClick={() => {
                      handleDeleteComment(comment.comment_id);
                    }}
                    className="delete-comment-button"
                  >
                    Delete your comment
                  </button>
                )}
              </li>
              {deleteErr /* && deletedCommentId == comment.comment_id */ && (
                <p className="error">
                  There was an issue deleting your comment, please try again
                  later. Error message: "{deleteErr}"
                </p>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentCard;
