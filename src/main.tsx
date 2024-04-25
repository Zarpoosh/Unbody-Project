import React from 'react'
import ReactDOM from 'react-dom/client'
import GoogleDocBlock from './GoogleDocs/GoogleDocBlock.tsx'
import BackToTupBtn from './BackToTup/BackToTupBtn.tsx'
import './index.css'



// import ImageBlock from './ImageBlock/ImageBlock.tsx'
// import TextBlock from './TextBlock.tsx'
// import Serach from './Serach.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleDocBlock />
    <BackToTupBtn/>
    {/* <TextBlock/> */}
    {/* <ImageBlock/> */}
    {/* <Serach/> */}
  </React.StrictMode>
)
