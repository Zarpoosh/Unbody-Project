import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";
import SearchComponent from "../SaerchComponent/SearchComponent";
import IsLodingPage from "../IsLodingPage/IsLodingPage.tsx";
import ShowMoreBtn from "./ShowMoreBtn";
import NotFound from "./NotFound";
import DarkMode from "../ChangeMode/DarkMode.tsx";

import "../index.css";


// This document describes a React component, GoogleDocBlock, for searching and displaying Google Docs.
// Fetches Google Docs using the Unbody.io API.
// Provides a search bar to find documents by title.
// Displays a list of available documents with details like title, path, and summary.
// Clicking on a document shows its full text content with a "Show More" button for truncation.
// Toggles between dark and light mode themes.
// Unbody client for interacting with the Unbody.io API.
//* Other custom components: SearchComponent, IsLodingPage, ShowMoreBtn, DarkMode.

function GoogleDocBlock() {
  const [foundDocument, setFoundDocument] = useState<Document | null>(null); // foundDocument: Stores the currently selected document (if any).
  const [documents, setDocuments] = useState<Document[]>([]);                //documents: Array containing all fetched documents.
  const [value, setValue] = useState("");                                    //value: Search query entered by the user.
  const [openNotFount, setOpenNotFound] = useState(false);                   //openNotFount: Flag to control displaying a "Not Found" message.
  const [isOpen, setIsOpen] = useState(false);                                //isOpen: Controls the expanded state of the selected document (full text visibility).
  const [isLoading, setIsLoading] = useState(true);                          //isLoading: Indicates if data is still being fetched.
  const [theme, setTheme] = useState("dark");                                //theme: Stores the current theme ("dark" or "light").
  const [numOfFiles, setNumOfFiles] = useState(0);                           //numOfFiles: Holds the number of available documents.

  // Define custom type
  type Document = {
    title: string;
    remoteId: string;
    pathString: string;
    path: string;
    summary: string;
    text: string;
    // Add more properties as needed
  };

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

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
      // Display the desired article
    } else {
      console.log("Document not found for:", searchTerm);
      setOpenNotFound(true);         //"Not Found" message (NotFound) conditionally displayed based on search results.
      setValue("");
      setTimeout(() => {
        setOpenNotFound(false);
      }, 4000);
    }
  };



// Fetches Google Doc data using the Unbody.io API on component mount (useEffect).
  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "DAE599E4B970781713A73A115BCAE4AE",
          projectId: "286f50a7-a8bb-4bfc-9b45-cad66b5e86db",
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
          .exec();

        //! console.log(payload);
        setDocuments(payload);
        setIsLoading(false);
        setNumOfFiles(documents.length); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    };

    fetchData();
  }, [documents.length]);

  return (
    <>
      <div className={`h-full ${theme}`}>
        <DarkMode theme={theme} handleThemeSwitch={handleThemeSwitch} />

        {openNotFount && <NotFound show={true} />}
        <SearchComponent
          value={value}
          onchange={onchange}
          onSearch={onSearch}
          foundDocument={foundDocument}
        />
        {/* <NumberWordTitle numberWordALL={allTextNumber} word={word} onchangeNum={onchangeNumber} /> */}
        <div className="flex flex-col">
        {/* Displays the total number of available documents. */}
          <p id="total-file" className="text-2xl p-2 mx-auto">
            Google Docs files available: {numOfFiles}
          </p>

          {/* Shows document details like title, path string, source ID, and summary.
          Renders the document text content with a "Show More" button for truncation. */}
          {documents.map((doc, index) => (
            <div
              key={index}
              className=" p-4 flex flex-col justify-center w-full sm:w-3/5 m-auto"
            >
              <ul
                key={index}
                className={`flex ${theme} flex-col text-left border-[#9825fc] border-2 w-auto my-4 rounded-md border-1`}
              >
                <li className="p-2 border-gray-600 border-b-2 flex">
                  <span className="text-xl text-[#9825fc]">Title: </span>
                  <p className="text-justify p-1 mx-2">{doc.title}</p>
                </li>
                <li className="p-2 border-gray-600 border-b-2 flex">
                  <span className="text-xl text-[#9825fc]">Path String: </span>
                  <p className="text-justify p-1 mx-2">{doc.pathString}</p>
                </li>
                <li className="p-2 border-gray-600 border-b-2 ">
                  <span className="text-xl text-[#9825fc]">Source ID:</span>
                  <p className="overflow-x-auto p-3">{doc.remoteId}</p>
                </li>
                <li className="list-item p-2 border-gray-600 ">
                  <span className="text-xl text-[#9825fc]">Summary:</span>
                  <p className="text-justify p-1">{doc.summary}</p>
                </li>
                <li className="p-2 border-gray-600 flex flex-col text-center">
                  <p className="text-justify p-2">
                    {isOpen ? doc.text : `${doc.text.slice(0, 0)}`}
                  </p>
                  <ShowMoreBtn isOpen={isOpen} onClick={handleClick} />
                </li>
              </ul>
            </div>
          ))}

          {/* Conditionally renders a loading indicator (IsLodingPage) while data is being fetched. */}
          {isLoading ? <IsLodingPage /> : null}
        </div>
      </div>
    </>
  );
}

export default GoogleDocBlock;


// DAE599E4B970781713A73A115BCAE4AE       maryam