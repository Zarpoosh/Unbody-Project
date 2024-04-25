// import React from 'react'
// import { useEffect } from 'react';
import { Unbody } from '@unbody-io/ts-client';
const Serach = () => {

  const fetchData = async () => {
   
      const u = new Unbody({
        apiKey: "4BA4593AC7E0C01A9D79CBB69040FB38",
        projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
      });
  
      // Fetch google docs
       u.get.textDocument
    //    .search
    // .about('what is succes?', "")
    // // .nearVector(1)
    .select("text")
    .where({
      mimeType: "text/markdown"
    })
    // .limit([1])
    // .generate(
    //   // "groupedResults",
    //   // "what is java?",
    //   ["text"]
    // )
    .exec()
    .then((response) => { console.log("response====>",response)})
    .catch((error) => {
        console.error("error ====>",error)
    })
  };
  
  fetchData();

  return (
    <>
        <div>
            
        </div>
    </>
  )
}

export default Serach
