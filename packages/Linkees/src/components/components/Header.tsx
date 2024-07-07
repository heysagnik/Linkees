import React from 'react';
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';
import defaultAvatar from '../../assets/avatar.jpeg';
import '../../css/skeleton.css';
import '../../css/components.css';
import { ThemeType } from '../../ts/types';

function Header({ avatar, name }: { avatar?: string; name: string }): JSX.Element {
  const [theme, setTheme] = React.useState<ThemeType>("light");

  React.useEffect(() => {
    const dataTheme = document.body.getAttribute('data-theme');
    setTheme(dataTheme === 'light' ? 'light' : 'dark');
  }, []);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <img src={avatar ?? defaultAvatar} alt="avatar" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>{name}</b>
        </h2>
      </div>
      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <SunIcon color="white" /> : <MoonIcon />}
      </button>
    </div>
  );
}

export default Header;
