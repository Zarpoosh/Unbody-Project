import React from 'react'
import "../index.css"


interface NotFoundProps {
  show: boolean;
}


const NotFound = ({show}:NotFoundProps) => {
  const containerClasses = `W-full md:w-3/5 lg:w-2/5 m-auto mt-4 bg-red-200 p-2 text-center border-2 border-red-500 rounded-md transition duration-10 ${show ? 'ease-in' : 'ease-out'}`;

  
    
  return (
    <>
    <div id="container" className={containerClasses}>
        <span className='text-red-500 p-3 text-xl'>This file does not exist ❗</span>
    </div>
    
    </>
  )
}

export default NotFound
