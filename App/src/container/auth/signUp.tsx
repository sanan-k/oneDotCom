import React, { useState } from "react";
import LabeledInput from "../../components/labeledInput";
interface IProps {
  onSignInRequest: () => void;
}

const signUpCntnrStyle: React.CSSProperties = {
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

const signInTextStyle: React.CSSProperties = {
  cursor: "pointer",
  color: "blue",
  textDecoration: "underline",
};

const signUpbtnStyle: React.CSSProperties = {
  outline: "none",
  fontSize: 24,
  backgroundColor: "white",
  border: "none",
  padding: "10px 25px",
  boxShadow: "gray 0 0 3px 0",
  borderRadius: 3,
  cursor: "pointer",
};

const SignUp = ({ onSignInRequest }: IProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div style={signUpCntnrStyle}>
      <h3>Create Account</h3>
      <div
        style={{
          ...signUpCntnrStyle,
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
        <LabeledInput
          name="confirm-password"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label style={{ alignSelf: "flex-start" }}>Role:</label>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            fontSize: 12,
          }}
        >
          <LabeledInput
            name="role"
            label="Admin"
            type="radio"
            value="Admin"
            onChange={(e) => setRole(e.target.value)}
          />
          <LabeledInput
            name="role"
            label="Customer"
            type="radio"
            value="Customer"
            onChange={(e) => setRole(e.target.value)}
          />
          <LabeledInput
            name="role"
            label="Supporter"
            type="radio"
            value="Supporter"
            onChange={(e) => setRole(e.target.value)}
          />
          <LabeledInput
            name="role"
            label="Seller"
            type="radio"
            value="Seller"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button style={signUpbtnStyle}>Sign Up</button>
      </div>
      <div>
        <p>
          Have an account,{" "}
          <span style={signInTextStyle} onClick={onSignInRequest}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
