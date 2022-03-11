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
      <div>
        List of usernames: cooljmessy, happyamy2016, tickle122, weegembump,
        jessjelly, grumpy19{" "}
        {logInErr && (
          <p className="error">Please login with a valid username!</p>
        )}
      </div>
    </div>
  );
}

export default SignInPage;
