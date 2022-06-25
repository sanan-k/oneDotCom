import React, { useState, useEffect } from "react";
import AppBanner from "../../components/appBanner";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Layout from "../layout";

import { checkSession } from "../../service/auth";

const Auth = ({ children }: React.PropsWithChildren) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [userInfo, setUserInfo] = useState({ userName: "", role: "" });

  const handleSignedUp = async () => {
    setShowSignUp(false);
  };

  useEffect(() => {
    (async () => {
      const { data } = await checkSession();
      if (data) {
        setAuthenticated(true);
        setUserInfo(data);
      }
    })();
  }, []);

  return authenticated ? (
    <Layout
      user={userInfo.userName}
      role={userInfo.role}
      onLogedOut={() => setAuthenticated(false)}
    >
      {children}
    </Layout>
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
        <SignUp
          onSignInRequest={() => setShowSignUp(false)}
          onSignedUp={handleSignedUp}
        />
      ) : (
        <SignIn
          onSignUpRequest={() => setShowSignUp(true)}
          onSignedIn={(userName, role) => {
            setAuthenticated(true);
            setUserInfo({
              userName,
              role,
            });
          }}
        />
      )}
    </div>
  );
};

export default Auth;
