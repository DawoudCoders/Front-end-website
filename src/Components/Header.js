import React from "react";

function Header() {
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
        <p>SignedInAs:</p>
      </div>
    </div>
  );
}

export default Header;
