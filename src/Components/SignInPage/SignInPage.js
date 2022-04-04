import React, { useContext, useState } from "react";
import fetchUsername from "../../HelperFunctions/fetchUsername";
import { UsernameContext } from "../../Contexts/UsernameContext";

function SignInPage() {
  const [inputValue, setInputValue] = useState("");
  const [logInErr, setLogInErr] = useState(false);
  const { username, setUsername } = useContext(UsernameContext);

  const handleSignIn = () => {
    fetchUsername(inputValue)
      .then((response) => {
        sessionStorage.setItem("username", inputValue);
        setUsername(sessionStorage.getItem("username"));
        setLogInErr(false);
      })
      .catch((err) => {
        setLogInErr(true);
      });
  };

  return (
    <div className="sign-in">
      <form>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="comment-input"
          type="text"
          placeholder="Username"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            handleSignIn();
            setInputValue("");
          }}
        >
          SignIn
        </button>
      </form>
      <div className="username-info">
        List of usernames that can currently be used to sign in with:{" "}
        <ul>
          <li>cooljmessy</li>
          <li>happyamy2016</li>
          <li>tickle122</li>
          <li>weegembump</li>
          <li>jessjelly</li>
          <li> grumpy19</li>
        </ul>{" "}
        {logInErr && (
          <p className="error">Please login with a valid username!</p>
        )}
      </div>
    </div>
  );
}

export default SignInPage;
