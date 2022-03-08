import React from "react";
import { useState } from "react";
import patchArticleById from "../../HelperFunctions/patchArticleById";

function VoteOnArticle({ article }) {
  const [votes, setVotes] = useState(article.votes);
  const [canVote, setCanVote] = useState(0);
  const [err, setErr] = useState(false);

  const handlevote = (event) => {
    setVotes((currentVotes) => {
      return currentVotes + parseInt(event.target.value);
    });
    setCanVote((current) => current + parseInt(event.target.value));
    patchArticleById(article.article_id, parseInt(event.target.value)).catch(
      (err) => {
        console.log(err);
        //unsure of how to get the actual error response shown 
        setErr(true);
      }
    );
  };
  console.log(err);
  if (err) {
    return <div className="error">There was an error processing your request: {err}</div>;
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
