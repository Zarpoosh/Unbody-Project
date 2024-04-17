import React, { useEffect, useState } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function Image() {
  const [imageWidth, setImageWidth] = useState();
  const [url, setUrl] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "EFC5C1CF92D914D75FB930949764F1E0",
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
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

export default Image;