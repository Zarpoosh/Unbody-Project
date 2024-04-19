// import React from 'react'
// import { useEffect } from 'react';
import { Unbody } from '@unbody-io/ts-client';
const Serach = () => {

  const fetchData = async () => {
    try {
      const u = new Unbody({
        apiKey: "4BA4593AC7E0C01A9D79CBB69040FB38",
        projectId: "7f1e43ac-c640-4669-845f-0c67d4265d4f",
      });
  
      // Fetch google docs
      const response = await u.get.googleDoc.ask('What is the price of bitcoin?').exec();
  
      console.log(response);
    } catch (error) {
      console.error("Error fetching document data:", error);
    }
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
