import React from "react";
import { FooterProps } from "../types";

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className={`Footer container`}>
      {children || (
        <p>
          Made with <span className="heart">❤️</span> by{" "}
          <a
            href="https://x.com/heysagnik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sagnik
          </a>
        </p>
      )}
    </div>
  );
};

export default Footer;
