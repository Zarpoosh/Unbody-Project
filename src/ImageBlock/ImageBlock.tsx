import { useEffect, useState } from "react";
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
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
        });


        // Fetch image data
        const {
          data: { payload },
        } = await u.get.imageBlock.select("width", "url").exec();
        setUrl(payload[0].url)
        setImageWidth(payload[0].width)

        console.log(payload[0].width)
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