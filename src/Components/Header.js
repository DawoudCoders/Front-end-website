import React, { useEffect, useState } from "react";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

function Header() {
  const { username } = useContext(UsernameContext);
 
  return (
    <div className="header">
      <div>
        <h2 className="header-name">Dawoud's Articles</h2>
      </div>

      <div>
        <nav className="nav">
          <a href="/"> <p>Articles</p></a> <a href="/signIn"> <p>Sign In</p></a>
        </nav>
      </div>
      <div className="header-signedIn">
        <p>{sessionStorage.getItem("username")?`User: ${sessionStorage.getItem("username")}`: "(Sign In To View User)"}</p>
      </div>
    </div>

   
  );
}

export default Header;
