import React, { useEffect, useState } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function GoogleDocBlock() {
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const [path, setPath] = useState(null);
  const [pathstring, setPathString] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "EFC5C1CF92D914D75FB930949764F1E0",
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
        });

        // //Fetch google docs
        const {
          data: { payload },
        } = await u.get.googleDoc
          .select("text", "summary", "title", "path", "pathString","remoteId", "slug", "size" ,"sourceId" ,"subtitle", "toc" , "mentions", "modifiedAt","mimeType")
          .exec();

        setText(payload[1].summary);
        setTitle(payload[1].title);
        setPath(payload[1].path);
        setPathString(payload[1].pathString)
        console.log("remoteId  ======>",payload[1].remoteId)
        console.log("slug  ======>",payload[1].slug)
        console.log("size  ======>",payload[1].size)
        console.log("text  ======>",payload[1].text)
        console.log("sourceId  ======>",payload[1].sourceId)
        console.log("subtitle  ======>",payload[1].subtitle)
        console.log("toc  ======>",payload[1].toc)
        console.log("mentions  ======>",payload[1].mentions)
        console.log("modifiedAt  ======>",payload[1].modifiedAt)
        console.log("mimeType  ======>",payload[1].mimeType)
        console.log(payload)








      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p id="text">{text}</p>
      <p id="title">{title}</p>
      <p id="path">{path}</p>
      <p>{pathstring}</p>
    </>
  );
}

export default GoogleDocBlock;



