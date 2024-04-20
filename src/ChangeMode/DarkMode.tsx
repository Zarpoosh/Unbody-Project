import "./darkmode.css";

// -----------------------------IMPORT ICON-----------------------------------------
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

// Define custom type
interface DarkModeProps {
  theme: string;
  handleThemeSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


//====================>>>>> Dark Mode Toggle Component in React <<<<====================
// Displays a button that switches between light and dark mode themes.
// Relies on props to determine the current theme and handle theme switching.
// ------------------------------------------------------------------------------------
const DarkMode = ({ theme, handleThemeSwitch }: DarkModeProps) => {
  return (
    <>
      <div className="">
    {/* Clicking the button triggers the handleThemeSwitch function passed as a prop. */}
        <button
          className={`p-4 border-2 border-[#9825fc] rounded-full m-5 ${theme}`}
          onClick={handleThemeSwitch}
        >
          {/* If theme is "light", displays the light mode icon (MdOutlineLightMode). */}
          {theme === "light" ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
        </button>
      </div>
    </>
  );
};

export default DarkMode;
