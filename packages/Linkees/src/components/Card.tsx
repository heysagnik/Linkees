import React from "react";
import { motion } from "framer-motion";
import { ICard } from "../types";
import { openLink } from "../utils";

export const Card: React.FC<ICard> = ({
  i,
  title,
  subtitle,
  link,
  cover,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      openLink(link);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.div
      className="Card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.3 }}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label={`Visit ${title} - ${subtitle}`}
    >
      <img src={cover} className="cover" alt={`${title} icon`} loading="lazy" />

      <div className="data">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default Card;
