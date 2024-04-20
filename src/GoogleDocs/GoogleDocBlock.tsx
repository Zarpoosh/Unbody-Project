import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";
import SearchComponent from "../SaerchComponent/SearchComponent";
import IsLodingPage from "../IsLodingPage/IsLodingPage.tsx";
import ShowMoreBtn from "./ShowMoreBtn";
import NotFound from "./NotFound";
import "../index.css";

//TODO  --------------------------import icons----------------------------------

function GoogleDocBlock() {
  const [foundDocument, setFoundDocument] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [value, setValue] = useState("");
  const [openNotFount, setOpenNotFound] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {openNotFount && <NotFound show={true} />}
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
            <li className="p-2 border-gray-600 border-b-2 flex">
              <span className="text-xl text-lime-500">Title: </span>
              <p className="text-justify p-1 mx-2">{doc.title}</p>
            </li>
            <li className="p-2 border-gray-600 border-b-2 flex">
              <span className="text-xl text-lime-500">Path String: </span>
              <p className="text-justify p-1 mx-2">{doc.pathString}</p>
            </li>
            <li className="p-2 border-gray-600 border-b-2 ">
              <span className="text-xl text-lime-500">Source ID:</span>
              <p className="overflow-x-auto p-3">{doc.remoteId}</p>
            </li>
            <li className="list-item p-2 border-gray-600 ">
              <span className="text-xl text-lime-500">Summary:</span>
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
    </>
  );
}

export default GoogleDocBlock;
