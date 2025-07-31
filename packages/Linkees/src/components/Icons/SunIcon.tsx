import React from "react";
import { IIcon } from "../../types";

export const SunIcon: React.FC<IIcon> = ({
  color = "#000",
  size = 24,
  className = "",
}) => {
  return (
    <svg
      className={`sun-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sun icon"
    >
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" />
      <path
        d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SunIcon;
