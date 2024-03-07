import React, { ButtonHTMLAttributes } from "react";

interface CustomButton {
  value: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButton> = ({
  value,
  type = "button",
  className,
  onClick,
}) => {
  return (
    <button
      className={`bg-gray-600 px-2 py-1 font-bold text-white rounded-md ${className}`}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  );
};

export default CustomButton;
