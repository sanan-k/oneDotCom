import React, { HtmlHTMLAttributes } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
}

const cardCntnrStyle: React.CSSProperties = {
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

const Card = ({ title = "", children, style }: IProps) => {
  return (
    <div style={{ ...cardCntnrStyle, ...style }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
