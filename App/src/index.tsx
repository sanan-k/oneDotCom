import React from "react";
import ReactDOM from "react-dom";

import Auth from "./container/Auth";
import Home from "./container/home";

const appCntnrStyle: React.CSSProperties = {
  width: "98vw",
  height: "98vh",
  boxSizing: "border-box",
  overflow: "hidden",
  padding: 5,
  margin: 5,
  backgroundColor: "whitesmoke",
};

const App = () => {
  return (
    <div style={appCntnrStyle}>
      <Auth>
        <Home />
      </Auth>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
