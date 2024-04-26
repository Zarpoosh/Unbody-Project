// import React from 'react'
// import { useEffect } from 'react';
import { Unbody } from '@unbody-io/ts-client';
const Serach = () => {

  const fetchData = async () => {
   
      const u = new Unbody({
        apiKey: "DAE599E4B970781713A73A115BCAE4AE",
        projectId: "286f50a7-a8bb-4bfc-9b45-cad66b5e86db",
      });
  
      // Fetch google docs
       u.get.textDocument
    .search
    .about('what is python?')
    // // .nearVector(1)
    .select("text")
    // .where({
    //   mimeType: "text/markdown"
    // })
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



// 4BA4593AC7E0C01A9D79CBB69040FB38
// 7f1e43ac-c640-4669-845f-0c67d4265d4f