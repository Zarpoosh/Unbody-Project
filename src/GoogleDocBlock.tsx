// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { Unbody } from "@unbody-io/ts-client";

// function GoogleDocBlock() {
//   const [text, setText] = useState(null);
//   const [title, setTitle] = useState(null);
//   const [path, setPath] = useState(null);
//   const [pathstring, setPathString] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const u = new Unbody({
//           apiKey: "EFC5C1CF92D914D75FB930949764F1E0",
//           projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
//         });

//         // //Fetch google docs
//         const {
//           data: { payload },
//         } = await u.get.googleDoc
//         // .select("text", "summary", "title","autoSummary", "path", "pathString","remoteId", "slug", "size" ,"sourceId" ,"subtitle", "toc" , "mentions", "modifiedAt","mimeType")
//           .search
//           .about("javaScript")
//           .exec();

//         setText(payload[0].summary);
//         setTitle(payload[1].title);
//         setPath(payload[1].path);
//         setPathString(payload[1].pathString)
//         console.log("tile  ======>",payload[1].autoSummary)

//         console.log(payload[1].javaScript)

//       } catch (error) {
//         console.error("Error fetching image data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <p id="text">{text}</p>
//       <p id="title">{title}</p>
//       <p id="path">{path}</p>
//       <p>{pathstring}</p>
//     </>
//   );
// }

// export default GoogleDocBlock;



import React, { useEffect, useState } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function GoogleDocBlock() {
  type Document = {
    title: string;
    remoteId: string;
    pathString: string;
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

        // Fetch google docs
        const {
          data: { payload },
        } = await u.get.googleDoc
        .select("text", "summary", "title","autoSummary", "path", "pathString","remoteId", "slug", "size" ,"sourceId" ,"subtitle", "toc" , "mentions", "modifiedAt","mimeType")
          .exec();

          console.log(payload)
        setDocuments(payload);
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {documents.map((doc, index) => (
        <div key={index}>
          <p>Title: {doc.title}</p>
          <p>Sourse ID: {doc.remoteId}</p>
          <p>Path String: {doc.pathString}</p>
          <p>Summary: {doc.summary}</p>
          <p>Path: {doc.text}</p>
        </div>
      ))}
    </>
  );
}
export default GoogleDocBlock;