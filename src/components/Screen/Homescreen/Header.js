import React from "react";

import Navigation from "./Navigation";

const Header = (props) => {
  return (      
    <Navigation onLogin={props.onLogin} onLogout={props.onLogout} />
  );
};

export default Header;
