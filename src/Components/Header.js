import React from "react";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

function Header() {
  const username = useContext(UsernameContext);
  
  return (
    <div className="header">
      <div>
        {" "}
        <h2>Dawoud's Articles</h2>
      </div>

      <div>
        <nav className="nav">
          <a href="/"> Articles</a> |<a href="/signIn"> Sign In</a>
        </nav>
      </div>
      <div>
        <p>SignedInAs: {username}</p>
      </div>
    </div>
  );
}

export default Header;
