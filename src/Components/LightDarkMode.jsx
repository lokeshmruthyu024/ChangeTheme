import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const LightDarkMode = () => {
  const [theme, setTheme] = UseLocalStorage('theme', 'dark')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme);
  return (
    <div className='light-dark-mode' data-theme={theme}>
      <div className='Container'>
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode
