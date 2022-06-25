import React from "react";
import Button from "./button";

interface IProps {
  onLogoutClick: () => void;
  user?: string;
  role?: string;
}

const navBarCntnrStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 10,
  boxShadow: "gray 0px 1px 1px 0px",
};

const eComParaStyle: React.CSSProperties = {
  letterSpacing: 8,
  color: "lightblue",
  fontFamily: "Arial Rounded MT Bold",
};

const NavBar = ({ onLogoutClick, user = "", role = "" }: IProps) => {
  return (
    <div style={navBarCntnrStyle}>
      <div style={{ display: "flex" }}>
        <p>
          ONE . DOT
          <span style={eComParaStyle}> E-COM</span>
        </p>
        {/* <p
          style={{
            fontSize: 18,
            float: "right",
            lineHeight: 0,
            marginTop: -50,
            marginRight: -50,
          }}
        >
          <i>buying made easy for everyone ...</i>
        </p> */}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {user && (
            <p
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                lineHeight: 0,
              }}
            >
              {user} {role && <p>({role})</p>}
            </p>
          )}
          <Button onClick={onLogoutClick}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
