import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";
import NotFound from "./NotFound";
import "../index.css";

function GoogleDocBlock() {
  const [foundDocument, setFoundDocument] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [value, setValue] = useState("");
  const[openNotFount , setOpenNotFound]=useState(false);

  const onchange = (e) => {
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
      {openNotFount && <NotFound />}
      <div id="container " className="text-center flex  flex-col justify-center mt-20">
      <h1 className="text-4xl p-3 m-3">my prpject</h1>
        <div id="search-box flex  mx-2 my-4 w-full">
          <input
            className="p-2 rounded-md outline-none m-3 bg-[#3b3b3b]"
            id="searchInput"
            type="text"
            value={value}
            onChange={onchange}
            onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
          />
          <button
            className="bg-lime-600 p-2 rounded-md"
            onClick={() => onSearch(value)}
          >
            Search
          </button>
        </div>

        {foundDocument && (
          <div id="search-result" className="flex ">
            <ul className="flex flex-col text-left">
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <span className="text-2xl text-lime-600 ">Title</span>
                <p className="">{foundDocument.title}</p>
              </li>
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <span className="text-2xl text-lime-600 ">Path</span>
                <p>{foundDocument.pathString}</p>
              </li>
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <span className="text-2xl text-lime-600 ">RemoteId</span>
                <p>{foundDocument.remoteId}</p>
              </li>
              <li className="list-item p-4 border-lime-500 border-2 rounded-md m-2">
                <span className="text-2xl text-lime-600 ">Content</span>
                <p className="text-justify p-3">{foundDocument.text}</p>
              </li>
            </ul>

            {/* Display more information from foundDocument as needed */}
          </div>
        )}
      </div>

      {/* {documents.map((doc, index) => (
        <div key={index}>
          <p>Title: {doc.title}</p>
          <p>Source ID: {doc.remoteId}</p>
          <p>Path String: {doc.pathString}</p>
          <p>Path: {doc.path}</p>
          <p>Summary: {doc.summary}</p>
          <p>Text: {doc.text}</p>
        </div>
      ))} */}
    </>
  );
}

export default GoogleDocBlock;
