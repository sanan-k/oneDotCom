import React, {
  ButtonHTMLAttributes,
  ComponentProps,
  ReactPropTypes,
} from "react";

interface IProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<IProps>,
    React.PropsWithChildren
  > {}

const btnStyle: React.CSSProperties = {
  outline: "none",
  fontSize: 24,
  backgroundColor: "white",
  border: "none",
  padding: "10px 25px",
  boxShadow: "gray 0 0 3px 0",
  borderRadius: 3,
  cursor: "pointer",
};

const Button = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button style={btnStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
