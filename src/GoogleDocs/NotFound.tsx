import "../index.css";
interface NotFoundProps {
  show: boolean;
}
// ========================>>>>>React Component for Displaying "Not Found" Message<<=========================
// this component is for displaying a message when a searched item is not found.
// Accepts a prop, show, as a boolean flag to control the visibility of the message.
// ----------------------------------------------------------------------------------------------------------

const NotFound = ({ show }: NotFoundProps) => {
  const containerClasses = `W-full md:w-3/5 lg:w-2/5 m-auto mt-4 bg-red-200 p-2 text-center border-2 border-red-500 rounded-md transition duration-10 ${
    show ? "ease-in" : "ease-out"
  }`;
  return (
    <>
    {/* If show is true, displays the message "This file does not exist ❗".Otherwise, hides the container. */}
      <div id="container" className={containerClasses}>
        <span className="text-red-500 p-3 text-xl">
          This file does not exist ❗
        </span>
      </div>
    </>
  );
};

export default NotFound;
