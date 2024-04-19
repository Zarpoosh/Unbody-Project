import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";
import NotFound from "./NotFound";
import SearchComponent from "../SaerchComponent/SearchComponent";
import "../index.css";


//TODO  --------------------------import icons----------------------------------

function GoogleDocBlock() {
  const [foundDocument, setFoundDocument] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [value, setValue] = useState("");
  const [openNotFount, setOpenNotFound] = useState(false);
  //------------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = isOpen ? "Read Less" : "Show More...";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
    const foundDocument = documents.find(
      (doc) => doc.title.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundDocument) {
      setFoundDocument(foundDocument);
      console.log("Found matching document:", foundDocument);
      setValue("");
      // انجام عملیات نمایش مقاله مورد نظر
    } else {
      console.log("Document not found for:", searchTerm);
      setOpenNotFound(true);
      setValue("");
      setTimeout(() => {
        setOpenNotFound(false);
      }, 4000);
    }
  };

  type Document = {
    title: string;
    remoteId: string;
    pathString: string;
    path: string;
    summary: string;
    text: string;
    // Add more properties as needed
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "4BA4593AC7E0C01A9D79CBB69040FB38",
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
        });

        // Fetch google docs based on the specific document name
        const {
          data: { payload },
        } = await u.get.googleDoc
          .select(
            "text",
            "summary",
            "title",
            "autoSummary",
            "path",
            "pathString",
            "remoteId",
            "slug",
            "size",
            "sourceId",
            "subtitle",
            "toc",
            "mentions",
            "modifiedAt",
            "mimeType"
          )
          // .search
          // .about("success") // Replace DOCUMENT_NAME_HERE with the name of the Google Doc you want to search for
          .exec();

        console.log(payload);
        setDocuments(payload);
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {openNotFount && <NotFound show={true} />}
      {/* <div
        id="container "
        className="text-center p-4 flex flex-col justify-center w-full sm:w-3/5 m-auto mt-20"
      >
        <h1 className="text-4xl p-3 m-3">my prpject</h1>
        <div
          id="search-box"
          className="mx-2  justify-center flex w-full text-center"
        >
          <input
            className="p-3 rounded-md outline-none md:m-2 m-1 bg-[#3b3b3b] w-4/5 lg:w-4/5"
            placeholder="Enter file name ..."
            id="searchInput"
            type="text"
            value={value}
            onChange={onchange}
            onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
          />
          <button
            className="bg-lime-600 px-2 md:m-2 m-1 rounded-md "
            onClick={() => onSearch(value)}
          >
            Search
          </button>
        </div>

        {foundDocument && (
          <div id="search-result" className="flex">
            <ul className="flex flex-col text-left w-full ">
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <span className="text-2xl text-lime-600 ">Title</span>
                <p className="">{foundDocument.title}</p>
              </li>
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <div className="flex"></div>
                <span className="text-2xl text-lime-600 ">Path</span>
                <p>{foundDocument.pathString}</p>
              </li>
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2 ">
                <div className="flex">
                  <span className="text-2xl text-lime-600 ">RemoteId</span>
                  <CopyText textToCopy={foundDocument.remoteId} />
                </div>
                <p className="overflow-x-auto p-3">{foundDocument.remoteId}</p>
              </li>
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <div className="flex">
                  <span className="text-2xl text-lime-600 ">Content</span>
                  <CopyText textToCopy={foundDocument.text} />
                </div>
                <p id="content" className="text-justify p-3">
                  {foundDocument.text}
                </p>
              </li>
            </ul>

           
          </div>
        )}
      </div> */}
      <SearchComponent
        value={value}
        onchange={onchange}
        onSearch={onSearch}
        foundDocument={foundDocument}
      />

      {documents.map((doc, index) => (
        <div className=" p-4 flex flex-col justify-center w-full sm:w-3/5 m-auto">
          <ul
            key={index}
            className="flex flex-col text-left border-lime-500 border-2 w-auto my-4 rounded-md border-1"
          >
            <li className="p-2 border-lime-500 border-b-2 flex">
              <span className="text-xl text-lime-600">Title: </span>
              <p className="text-justify p-1 mx-2">{doc.title}</p>
            </li>
            <li className="p-2 border-lime-500 border-b-2 flex">
              <span className="text-xl text-lime-600">Path String: </span>
              <p className="text-justify p-1 mx-2">{doc.pathString}</p>
            </li>
            <li className="p-2 border-lime-500 border-b-2 ">
              <span className="text-xl text-lime-600">Source ID:</span>
              <p className="overflow-x-auto p-3">{doc.remoteId}</p>
            </li>
            <li className="list-item p-2 border-lime-500 ">
              <span className="text-xl text-lime-600">Summary:</span>
              <p className="text-justify p-1">{doc.summary}</p>
            </li>
            <li className="p-2 border-lime-500 flex flex-col text-center">
              {/* <span className="text-xl text-lime-600">Text:</span> */}
              <p className="text-justify p-2">
                {isOpen ? doc.text : `${doc.text.slice(0, 0)}`}
              </p>
              <button
                className="border-lime-500 border-2 active:bg-gray-400 p-2 rounded-md text-xs text-center m-auto "
                onClick={handleClick}
              >
                {toggleText}
              </button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default GoogleDocBlock;
