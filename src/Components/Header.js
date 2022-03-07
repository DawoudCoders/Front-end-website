import React from "react";

function Header() {
  return (
    <div className="header">
      <span>
        <h2>Dawoud's Articles</h2>
        <p>SignedInAs:</p>
      </span>
      <div>
        <nav className="nav">
          <a href="/"> Articles</a> |<a href="/signIn"> Sign In</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
