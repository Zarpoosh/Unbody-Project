import { useState, useEffect } from "react";

// -------------------------IMPORT ICON----------------------------------------------------
import { IoIosArrowUp } from "react-icons/io";
import "./backtotop.css";


// ======================>>>>>>BackToTop Button Component in React<<<<<====================
// The component listens for scroll events.
// When the user scrolls more than 100 pixels from the top, the button appears.
// Clicking the button smoothly scrolls the user back to the top of the page.
// ----------------------------------------------------------------------------------------
const BackToTupBtn = () => {
  const [backToTupBtn, setBackToTupBtn] = useState(false);
  
  // Uses useEffect to add a scroll event listener.
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // When the user scrolls more than 100 pixels from the top, the button appears.
      if (window.scrollY > 100) {
        setBackToTupBtn(true);
      } else {
        setBackToTupBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTupBtn && (
        <button
          onClick={scrollUp}
          id="back-top"
          className="p-3 rounded-full fixed left-0  bottom-0 text-white flex ml-5 mb-5"
        >
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};
export default BackToTupBtn;
