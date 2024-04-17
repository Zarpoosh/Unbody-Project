import React, { useEffect, useState } from "react";
import "./App.css";
import { Unbody } from "@unbody-io/ts-client";

function TextBlock() {

  const [text, setText] = useState(null)



useEffect(() => {
  const fetchData = async () => {
    try {
      const u = new Unbody({
        apiKey: "EFC5C1CF92D914D75FB930949764F1E0",
        projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
      });

      const {
        data: { payload },
      } = await u.get.textBlock
        .select(
          "text",
          "order",
          "remoteId",
          "sourceId",
          "tagName",
          "classNames"
        )
        .exec();


        setText(payload[1].text)
        console.log(payload)

    } catch (err) {
      console.error("Error fetching image data:", err);
    }
  };

  fetchData();
}, []);

  
  return (
    <>
      <p>{text}</p>
    </>
  );
}

export default TextBlock;








