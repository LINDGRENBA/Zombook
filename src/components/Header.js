import React from "react";

function Header() {
  return (
    <React.Fragment>
      <h1>Zombook</h1>
      <NavLinks />
      <SearchBar />
      <Tweets />
    </React.Fragment>
  );
}

export default Header;