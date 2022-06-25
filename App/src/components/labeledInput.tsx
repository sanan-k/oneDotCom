import React, { HTMLInputTypeAttribute } from "react";

export interface IProps {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const LabeledInput = ({
  name,
  label,
  type = "text",
  value,
  onChange,
}: IProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={name}>{label}:</label>
      <input
        name={name}
        style={{ fontSize: "inherit" }}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LabeledInput;
