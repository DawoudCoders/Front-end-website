import React, { useState } from "react";
import postComment from "../../HelperFunctions/postComment";
import { UsernameContext } from "../../Contexts/UsernameContext";
import { useContext } from "react";

function PostNewComment({ article }) {
  const [body, setBody] = useState("");
  const username = useContext(UsernameContext);
  const [err, setErr] = useState(null);
  const [lengthError, setLengthError] = useState(false);

  const postNewComment = (article, body) => {
    if (body.length > 3) {
      postComment(article.article_id, body)
        .then(() => {
          setBody("");
          setLengthError(false);
        })
        .catch((err) => {
          setErr(err);
        });
    } else {
      setLengthError(true);
    }
  };
  console.log(lengthError);
  if (err) {
    return <div>{err}</div>;
  } else {
    return (
      <div>
        <form className="comment-form">
          <input
            className="comment-input"
            placeholder="POST A COMMENT!"
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
            type="text"
          />
          <button
            type="button"
            onClick={(event) => {
              postNewComment(article, body);
            }}
          >
            Submit Comment
          </button>
        </form>
        {lengthError && <p className="error">Comment needs to be 3 or more characters! </p>}
        <h2 className="specific-article-headers comments-header"> Comments:</h2>
      </div>
    );
  }
}

export default PostNewComment;
