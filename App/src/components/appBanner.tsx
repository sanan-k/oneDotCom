import React from "react";

const appBannerCntnrStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const eComParaStyle: React.CSSProperties = {
  letterSpacing: 8,
  color: "lightblue",
  fontFamily: "Arial Rounded MT Bold",
};

const AppBanner = () => {
  return (
    <div style={appBannerCntnrStyle}>
      <div
        style={{
          fontSize: 128,
          lineHeight: 0,
          textShadow: "gray 3px 8px 8px",
        }}
      >
        <p>ONE</p>
        <p>. DOT</p>
        <p style={eComParaStyle}>E-COM</p>
        <p
          style={{
            fontSize: 18,
            float: "right",
            lineHeight: 0,
            marginTop: -50,
            marginRight: -50,
          }}
        >
          <i>buying made easy for everyone ...</i>
        </p>
      </div>
      <div>
        <p style={{ letterSpacing: 4 }}>
          A new age buying experiance for naive and volatile customers.
        </p>
      </div>
    </div>
  );
};

export default AppBanner;
