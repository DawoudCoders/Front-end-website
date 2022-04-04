import React, { useState } from "react";
import postComment from "../../HelperFunctions/postComment";
import { UsernameContext } from "../../Contexts/UsernameContext";
import { useContext } from "react";
import CommentCard from "./CommentCard";

function PostNewComment({ article, setComments }) {
  const [commentObj, setCommentObj] = useState({
    article_id: article.article_id,
    author: sessionStorage.getItem("username"),
    body: "",
    votes: 0,
  });
  const username = useContext(UsernameContext);
  const [submitErr, setSubmitErr] = useState(null);
  const [lengthError, setLengthError] = useState(false);
  const [PostError, setPostError] = useState(false);

  const submitPost = (article, commentObj) => {
    if (commentObj.body.length > 3) {
      setComments((currentComments) => {
        let copyObj = { ...commentObj };
        copyObj.comment_id = currentComments.length;
        return [commentObj, ...currentComments];
      });
      postComment(article.article_id, commentObj.body)
        .then(() => {
          setCommentObj({
            body: "",
            votes: 0,
            author: sessionStorage.getItem("username")
          });
          setSubmitErr(false);
          setLengthError(false);
        })
        .catch((err) => {
          setPostError(true);

          setComments((currentComments) => {
            let copyObj = [...currentComments];
            return copyObj.slice(1);
          });
          setSubmitErr(err.response.data.msg);
        });
    } else {
      setLengthError(true);
    }
  };

  return (
    <div>
      <form className="comment-form">
        <input
          className="comment-input"
          placeholder="POST A COMMENT!"
          value={commentObj.body}
          onChange={(event) => {
            setCommentObj((current) => {
              let copy = { ...current };
              copy.body = event.target.value;
              return copy;
            });
          }}
          type="text"
        />
        <button
          type="button"
          onClick={(event) => {
            submitPost(article, commentObj);
          }}
        >
          Submit Comment
        </button>
      </form>
      {lengthError && (
        <p className="error">Comment needs to be 2 or more characters! </p>
      )}
      {submitErr && (
        <p className="error">
          There was an issue posting your comment, please try again later. Error
          message: "{submitErr}"
        </p>
      )}
      <h2 className="specific-article-headers comments-header"> Comments:</h2>
    </div>
  );
}

export default PostNewComment;
