import React, { useEffect, useState } from "react";
import AppBanner from "../../components/appBanner";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Auth = ({ children }: React.PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return authenticated ? (
    <>{children}</>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AppBanner />
      {showSignUp ? (
        <SignUp onSignInRequest={() => setShowSignUp(false)} />
      ) : (
        <SignIn
          onSignUpRequest={() => setShowSignUp(true)}
          onSignedIn={() => setAuthenticated(true)}
        />
      )}
    </div>
  );
};

export default Auth;
