import React from "react";
import CopyText from "../Copy/CopyText";
import "./SearchComponent.css";
import "../index.css";

//TODO-------------------------- import icons----------------------------
import { IoSearch } from "react-icons/io5";

interface SearchComponentProps {
  value: string;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (value: string) => void;
  foundDocument: {
    title: string;
    pathString: string;
    remoteId: string;
    text: string;
  } | null;
}

const SearchComponent = ({
  value,
  onchange,
  onSearch,
  foundDocument,
}: SearchComponentProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onchange(event);
  };

  return (
    <div
      id="container"
      className="text-center p-4 flex flex-col justify-center w-full sm:w-3/5 m-auto mt-5"
    >
      <h1 className="text-6xl p-3 m-4 text-[#5c24fe]">listing files :)</h1>
      <div
        id="search-box"
        className="mx-2 justify-center flex w-full text-center"
      >
        <input
          className="p-3 focus:outline-0 disabled:bg-blue-gray-50 rounded-md outline-none md:m-2 m-1 w-4/5 lg:w-4/5 bg-transparent border-2 border-[#5c24fe]"
          placeholder="Enter file name ..."
          id="searchInput"
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={(e) =>
            e.key === "Enter" && onSearch((e.target as HTMLInputElement).value)
          }
        />
        <button
          id="search-btn"
          className=" px-2 md:m-2 m-1 rounded-md flex text-white"
          onClick={() => onSearch(value)}
        >
          <IoSearch className="my-auto w-5 h-5 " />
          <span className="my-auto">Search</span>
        </button>
      </div>

      {foundDocument && (
        <div id="search-result" className="flex">
          <ul className="flex flex-col text-left w-full">
            <li className="list-item p-4 border-[#5c24fe] border-2 rounded-md m-2">
              <span className="text-2xl text-[#5c24fe]">Title</span>
              <p>{foundDocument.title}</p>
            </li>
            <li className="list-item p-4 border-[#5c24fe] border-2 rounded-md m-2">
              <div className="flex"></div>
              <span className="text-2xl text-[#5c24fe]">Path</span>
              <p>{foundDocument.pathString}</p>
            </li>
            <li className="list-item p-4 border-[#5c24fe] border-2 rounded-md m-2">
              <div className="flex">
                <span className="text-2xl text-[#5c24fe]">RemoteId</span>
                <CopyText textToCopy={foundDocument.remoteId} />
              </div>
              <p className="overflow-x-auto p-3">{foundDocument.remoteId}</p>
            </li>
            <li className="list-item p-4 border-[#5c24fe] border-2 rounded-md m-2">
              <div className="flex">
                <span className="text-2xl text-[#5c24fe]">Content</span>
                <CopyText textToCopy={foundDocument.text} />
              </div>
              <p id="content" className="text-justify p-3">
                {foundDocument.text}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
