import React from 'react'
import ReactDOM from 'react-dom/client'
import GoogleDocBlock from './GoogleDocs/GoogleDocBlock.tsx'
import ImageBlock from './ImageBlock.tsx'
// import TextBlock from './TextBlock.tsx'
// import Serach from './Serach.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
    <GoogleDocBlock />
    {/* <TextBlock/> */}
    <ImageBlock/>
    {/* <Serach/> */}
  </React.StrictMode>,
)
