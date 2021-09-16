import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ label, color }) => {
  return <div className="btn btn-blue">{label}</div>;
};

export default Button;
