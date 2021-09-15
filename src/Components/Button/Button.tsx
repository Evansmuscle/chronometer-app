import React from "react";

interface ButtonProps {
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ label, color }) => {
  return <div className="btn">{label}</div>;
};

export default Button;
