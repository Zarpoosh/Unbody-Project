import { FaAngleDown, FaAngleUp } from "react-icons/fa";




// Defines the expected props for the component:
interface ShowMoreBtnProps {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// -==================>>>React Component for "Show More" Button<<<<====================
// this component for a button that toggles content visibility.
// Displays a button with text and an icon to indicate "Show More" or "Show Less".
// Clicking the button triggers a callback function passed as a prop.
// -----------------------------------------------------------------------------------
const ShowMoreBtn = ({ isOpen, onClick }: ShowMoreBtnProps) => {
  const toggleText = isOpen ? "" : "More";

  return (
    <button
      className="border-[#9825fc] border-2 active:bg-gray-400 p-2 rounded-md text-xs text-center m-auto flex"
      onClick={onClick}
    >
      {toggleText}{" "}
      {isOpen ? <FaAngleUp /> : <FaAngleDown className="mx-1 my-auto" />}
    </button>
  );
};

export default ShowMoreBtn;
