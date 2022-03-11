import React, { useEffect, useState } from "react";
import { UsernameContext } from "../Contexts/UsernameContext";
import { useContext } from "react";

function Header() {
  const { username } = useContext(UsernameContext);
 
  return (
    <div className="header">
      <div>
        <h2>Dawoud's Articles</h2>
      </div>

      <div>
        <nav className="nav">
          <a href="/"> Articles</a> |<a href="/signIn"> Sign In</a>
        </nav>
      </div>
      <div>
        <p>SignedInAs: {sessionStorage.getItem("username")}</p>
      </div>
    </div>

    // <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    //   <div class="container-fluid">
    //     <span class="navbar-brand mb-1 h1">Dawoud's Articles</span>

    //     <a class="nav-link active" aria-current="page" href="#">
    //       Articles
    //     </a>

    //     <a class="nav-link active" aria-current="page" href="#">
    //       Sign In
    //     </a>
    //   </div>
    // </nav>
  );
}

export default Header;
