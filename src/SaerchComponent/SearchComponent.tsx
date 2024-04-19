import React from 'react';
import CopyText from "../Copy/CopyText";


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

const SearchComponent: React.FC<SearchComponentProps>  = ({ value, onchange, onSearch, foundDocument }) => {
  return (
    <div id="container" className="text-center p-4 flex flex-col justify-center w-full sm:w-3/5 m-auto mt-20">
      <h1 className="text-4xl p-3 m-3">my project</h1>
      <div id="search-box" className="mx-2 justify-center flex w-full text-center">
        <input
          className="p-3 rounded-md outline-none md:m-2 m-1 bg-[#3b3b3b] w-4/5 lg:w-4/5"
          placeholder="Enter file name ..."
          id="searchInput"
          type="text"
          value={value}
          onChange={onchange}
          onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
        />
        <button className="bg-lime-600 px-2 md:m-2 m-1 rounded-md" onClick={() => onSearch(value)}>
          Search
        </button>
      </div>

      {foundDocument && (
        <div id="search-result" className="flex">
          <ul className="flex flex-col text-left w-full">
            <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
              <span className="text-2xl text-lime-600">Title</span>
              <p>{foundDocument.title}</p>
            </li>
            <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
              <div className="flex"></div>
              <span className="text-2xl text-lime-600">Path</span>
              <p>{foundDocument.pathString}</p>
            </li>
            <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
              <div className="flex">
                <span className="text-2xl text-lime-600">RemoteId</span>
                <CopyText textToCopy={foundDocument.remoteId} />
              </div>
              <p className="overflow-x-auto p-3">{foundDocument.remoteId}</p>
            </li>
            <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
              <div className="flex">
                <span className="text-2xl text-lime-600">Content</span>
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