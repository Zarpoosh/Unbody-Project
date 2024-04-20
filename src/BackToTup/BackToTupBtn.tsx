import  { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../index.css";


const BackToTupBtn=()=> {
  const [backToTupBtn, setBackToTupBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
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
            className="bg-lime-500 p-3 rounded-full fixed left-0  bottom-0 flex ml-5 mb-5"
          >
            <IoIosArrowUp />
          </button>
        )}
    </>
  );
}
export default BackToTupBtn;