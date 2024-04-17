import React, { useEffect, useState } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function ImageBlock() {
  const [imageWidth, setImageWidth] = useState();
  const [url, setUrl] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "4BA4593AC7E0C01A9D79CBB69040FB38",
          projectId: "72755f6e-15ef-433d-b537-41656894f905",
        });


        // Fetch image data
        const {
          data: { payload },
        } = await u.get.imageBlock.select("width", "url").exec();
        setUrl(payload[0].url)
        setImageWidth(payload[0].width)

      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <img src={url} alt="" />
      <p>{imageWidth}</p>
    </>
  );
}

export default ImageBlock;