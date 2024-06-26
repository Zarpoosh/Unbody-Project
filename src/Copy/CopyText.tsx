import { useState, useEffect } from "react";

//* Defines the expected prop for the component: *
interface textToCopyProps {
  textToCopy: string;
}
//=======================>>>>>>>>>>React Component for Copying Text<<<<<<<<=====================
//* this component that allows users to copy a provided text string to their clipboard.
// Accepts a prop, textToCopy, containing the text to be copied.
// Displays a button with a copy icon.
// Clicking the button copies the textToCopy to the clipboard.
// -------------------------------------------------------------------------------------------

const CopyText = ({ textToCopy }: textToCopyProps) => {
  const [copyText, setCopyText] = useState(textToCopy);

  //* useEffect ensures copyText is always updated when the textToCopy prop changes.
  useEffect(() => {
    setCopyText(textToCopy);
  }, [textToCopy]);

  const handleCopy = () => {
    //* Uses navigator.clipboard.writeText to copy the current copyText to the clipboard.
    navigator.clipboard.writeText(copyText);
    //* console.log(copyText);
  };
  return (
    <>
      <button
        onClick={handleCopy}
        className="ml-auto border-1 rounded-md p-1 text-sm active:bg-gray-100 bg-gray-400 border-gray-5c00 border-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
          />
        </svg>
      </button>
    </>
  );
};

export default CopyText;
