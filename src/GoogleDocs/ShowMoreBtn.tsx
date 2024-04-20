import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface ShowMoreBtnProps {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShowMoreBtn = ({ isOpen, onClick }: ShowMoreBtnProps) => {
  const toggleText = isOpen ? "" : "More";

  return (
    <button
      className="border-[#5c24fe] border-2 active:bg-gray-400 p-2 rounded-md text-xs text-center m-auto flex"
      onClick={onClick}
    >
      {/* {isOpen ? <FaAngleUp className="mx-1 my-auto" /> : <FaAngleDown className="mx-1 my-auto" />} */}
      {toggleText}{" "}
      {isOpen ? <FaAngleUp /> : <FaAngleDown className="mx-1 my-auto" />}
    </button>
  );
};

export default ShowMoreBtn;
