import React from "react";
import { useState } from "react";
import patchArticleById from "../../HelperFunctions/patchArticleById";

function VoteOnArticle({ article }) {
  const [votes, setVotes] = useState(article.votes);
  const [canVote, setCanVote] = useState(0);
  const [err, setErr] = useState(null);

  const handlevote = (event) => {
    setVotes((currentVotes) => {
      return (currentVotes += parseInt(event.target.value));
    });
    setCanVote((current) => (current += parseInt(event.target.value)));
    patchArticleById(article.article_id, parseInt(event.target.value)).catch(
      (err) => {
        setErr(err.response.data.msg);
      }
    );
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

        <button
          disabled={canVote === 1}
          value={1}
          onClick={handlevote}
          className="vote-article-button"
        >
          Vote Up
        </button>
        <button
          disabled={canVote === -1}
          value={-1}
          onClick={handlevote}
          className="vote-article-button"
        >
          Vote Down
        </button>
      </div>
    );
  }
}

export default VoteOnArticle;
