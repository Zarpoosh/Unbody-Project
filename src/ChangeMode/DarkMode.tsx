// import {useState} from 'react'
import "./darkmode.css"

interface DarkModeProps {
  theme: string;
  handleThemeSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const DarkMode = ({ theme, handleThemeSwitch }:DarkModeProps) => {
  return (
    <>
    <div>
      <button className={`p-3 rounded-3x1 ${theme}`}  onClick={handleThemeSwitch}>
      {theme==="light" ? " light": "Dark Mode"}
      </button>
    </div>
    </>
  )
}

export default DarkMode;
