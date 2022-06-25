import React, { useState } from "react";
import Button from "../../components/button";
import LabeledInput from "../../components/labeledInput";

import { login } from "../../service/auth";

interface IProps {
  onSignUpRequest: () => void;
  onSignedIn: () => void;
}

const signInCntnrStyle: React.CSSProperties = {
  width: 600,
  height: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "gray 0 0 11px 0",
  borderRadius: 5,
  margin: 15,
};

const signUpTextStyle: React.CSSProperties = {
  cursor: "pointer",
  color: "blue",
  textDecoration: "underline",
};

const SignIn = ({ onSignUpRequest, onSignedIn }: IProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loginAttempt, setLoginAttempt] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = async () => {
    setLoginAttempt(true);
    const error = await login(userName, password);

    if (!error) {
      onSignedIn();
    } else {
      setLoginError(error);
      setLoginAttempt(false);
    }
  };

  return (
    <div style={signInCntnrStyle}>
      <h3>Sign In</h3>
      <div
        style={{
          ...signInCntnrStyle,
          width: null,
          height: null,
          boxShadow: null,
          fontSize: 18,
        }}
      >
        <LabeledInput
          name="userName"
          label="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <LabeledInput
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} disabled={loginAttempt}>
          Login
        </Button>
        {loginError && <div style={{ color: "orangered" }}>{loginError}</div>}
      </div>
      <div>
        <p>
          Don't have an account{" "}
          <span style={signUpTextStyle} onClick={onSignUpRequest}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
