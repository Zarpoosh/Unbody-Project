import React from "react";
import { Unbody } from "@unbody-io/ts-client";
import { useEffect, useState } from "react";

const TextBlock = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const u = new Unbody({
          apiKey: "EFC5C1CF92D914D75FB930949764F1E0",
          projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
        });

        const {
          data: { payload },
        } = await u.get.googleDoc
          .select(
            "footnotes",
            "html",
            "order",
            "remoteId",
            "sourceId",
            "tagName",
            "classNames"
          )
          .exec();
      } catch (err) {
        console.error("Error fetching image data:", err);
      }
    };

    fetchData();
  }, []);

  return 
  <>
  </>;
};

export default TextBlock;
