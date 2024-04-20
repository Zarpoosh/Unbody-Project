// import {useState} from 'react'
import "./darkmode.css"
import { MdOutlineLightMode , MdOutlineNightlight } from "react-icons/md";



interface DarkModeProps {
  theme: string;
  handleThemeSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const DarkMode = ({ theme, handleThemeSwitch }:DarkModeProps) => {
  return (
    <>
    <div className="">
      <button className={`p-4 border-2 border-lime-500 rounded-full  fixed right-0  top-0 flex m-5 ${theme}`}  onClick={handleThemeSwitch}>
      {theme==="light" ? <MdOutlineLightMode/>: <MdOutlineNightlight/>}
      </button>
    </div>
    </>
  )
}

export default DarkMode;
