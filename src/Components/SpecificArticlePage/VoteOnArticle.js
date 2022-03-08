import React from "react";
import { useState } from "react";
import patchArticleById from "../../HelperFunctions/patchArticleById";

function VoteOnArticle({ article }) {
  const [votes, setVotes] = useState(article.votes);
  const [canVote, setCanVote] = useState(true);
  const [err, setErr] = useState(null);

  const handlevote = (event) => {
    if (canVote) {
      setVotes((currentVotes) => {
        return currentVotes + parseInt(event.target.value);
      });
      setCanVote(false);
      patchArticleById(article.article_id, parseInt(event.target.value)).catch(
        (err) => {
          setErr(err.response.data.msg);
        }
      );
    }
  };
 
  if (err) {
    return (
      <div className="error">
        You're vote could not be counted right now, please try again later{" "}
        <br></br>({err})
      </div>
    );
  } else {
    return (
      <div className="vote-on-article">
        <div className="number-of-votes">Votes: {votes}</div>

        <button value={1} onClick={handlevote} className="vote-article-button">
          Vote Up
        </button>
        <button value={-1} onClick={handlevote} className="vote-article-button">
          Vote Down
        </button>
      </div>
    );
  }
}

export default VoteOnArticle;
