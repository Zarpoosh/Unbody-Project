import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";
import SearchComponent from "../SaerchComponent/SearchComponent";
import IsLodingPage from "../IsLodingPage/IsLodingPage.tsx";
import ShowMoreBtn from "./ShowMoreBtn";
import NotFound from "./NotFound";
import DarkMode from "../ChangeMode/DarkMode.tsx";

import "../index.css";

//TODO  --------------------------import icons----------------------------------

function GoogleDocBlock() {
  const [foundDocument, setFoundDocument] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [value, setValue] = useState("");
  const [openNotFount, setOpenNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [numOfFiles, setNumOfFiles] = useState(0); // State to hold the number of available files


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
          .exec();

        console.log(payload);
        setDocuments(payload);
        setIsLoading(false); 
        setNumOfFiles(documents.length);// Set loading state to false after data is fetched
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
        <div className="flex flex-col">
          <p id="total-file" className="text-2xl p-2 mx-auto">Google Docs files available: {numOfFiles}</p>
        {documents.map((doc, index) => (
          <div  key={index} className=" p-4 flex flex-col justify-center w-full sm:w-3/5 m-auto">
            <ul
              key={index}
              className={`flex ${theme} flex-col text-left border-[#5c24fe] border-2 w-auto my-4 rounded-md border-1`}
            >
              <li className="p-2 border-gray-600 border-b-2 flex">
                <span className="text-xl text-[#5c24fe]">Title: </span>
                <p className="text-justify p-1 mx-2">{doc.title}</p>
              </li>
              <li className="p-2 border-gray-600 border-b-2 flex">
                <span className="text-xl text-[#5c24fe]">Path String: </span>
                <p className="text-justify p-1 mx-2">{doc.pathString}</p>
              </li>
              <li className="p-2 border-gray-600 border-b-2 ">
                <span className="text-xl text-[#5c24fe]">Source ID:</span>
                <p className="overflow-x-auto p-3">{doc.remoteId}</p>
              </li>
              <li className="list-item p-2 border-gray-600 ">
                <span className="text-xl text-[#5c24fe]">Summary:</span>
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
        {isLoading ? <IsLodingPage /> : null}
        </div>
        
      </div>
    </>
  );
}

export default GoogleDocBlock;
