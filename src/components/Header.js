import React from 'react'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'
import avatar from '../assets/avatar.jpeg'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header() {
  const [theme, setTheme] = React.useState(() => document.body.getAttribute('data-theme') ?? 'dark')
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }
  const isDark = theme === 'dark'
  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <img src={avatar} alt="avatar" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>Sagnik. </b>
        </h2>
      </div>
      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <SunIcon color="white" /> : <MoonIcon  />}
      </button>
    </div>
  )
}

export default Header
