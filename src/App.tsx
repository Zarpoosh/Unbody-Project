import React, { useEffect, useState } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function App() {
  // const [imageWidth, setImageWidth] = useState(null);
  // const [url, setUrl] = useState();
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const [path, setPath] = useState(null);

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
          .select("text", "summary", "title", "path")
          .exec();

        setText(payload[1].summary);
        setTitle(payload[1].title);
        setPath(payload[1].path);

        // // Fetch image data
        // const {
        //   data: { payloadImg },
        // } = await u.get.imageBlock.select("width", "url").exec();
        // setUrl(payloadImg[0].url)
        // setImageWidth(payloadImg[0].width)

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
      {/* <img src={url} alt="" /> */}
      {/* <p>{imageWidth}</p> */}
    </>
  );
}

export default App;



