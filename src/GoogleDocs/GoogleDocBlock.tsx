import React, { useEffect, useState } from "react";
import { Unbody } from "@unbody-io/ts-client";
// import SearchBox from "./SearchBox";

function GoogleDocBlock() {
  const [foundDocument, setFoundDocument] = useState<Document | null>(null);

  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
    const foundDocument = documents.find((doc) => doc.title.toLowerCase() === searchTerm.toLowerCase());
    if (foundDocument) {
      setFoundDocument(foundDocument);
      console.log('Found matching document:', foundDocument);
      
      // انجام عملیات نمایش مقاله مورد نظر
    } else {
      console.log('Document not found for:', searchTerm);
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
  const [documents, setDocuments] = useState<Document[]>([]);

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
          .select("text", "summary", "title", "autoSummary", "path", "pathString", "remoteId", "slug", "size", "sourceId", "subtitle", "toc", "mentions", "modifiedAt", "mimeType")
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
    <input id="searchInput" type="text" onKeyPress={(e) => e.key === 'Enter' && handleSearch(e.target.value)} />

    {foundDocument && (
        <div>
          <p>{foundDocument.title}</p>
          <p>{foundDocument.text}</p>
          {/* Display more information from foundDocument as needed */}
        </div>
      )}


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