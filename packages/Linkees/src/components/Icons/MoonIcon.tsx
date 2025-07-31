import React from "react";
import { IIcon } from "../../types";

export const MoonIcon: React.FC<IIcon> = ({
  color = "#000",
  size = 24,
  className = "",
}) => {
  return (
    <svg
      className={`moon-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Moon icon"
    >
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
    </svg>
  );
};

export default MoonIcon;
