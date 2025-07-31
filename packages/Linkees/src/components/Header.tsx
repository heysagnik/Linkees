import React from "react";
import { HeaderProps, ThemeType } from "../types";
import { SunIcon, MoonIcon } from "./Icons";

export const Header: React.FC<HeaderProps> = ({ avatar, name }) => {
  const [theme, setTheme] = React.useState<ThemeType>("dark");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("linkees-theme") as ThemeType;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.body.setAttribute("data-theme", initialTheme);
  }, []);

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("linkees-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div className={`Header container`}>
      <div className="ten columns Header__inner">
        {avatar && <img src={avatar} alt={`${name}'s avatar`} loading="lazy" />}
        <h2>{name}</h2>
      </div>
      <button
        className="switch-theme-button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        type="button"
      >
        {isDark ? <SunIcon color="white" size={20} /> : <MoonIcon size={20} />}
      </button>
    </div>
  );
};

export default Header;
