import React from 'react'
import ReactDOM from 'react-dom/client'
// import GoogleDocBlock from './GoogleDocBlock.tsx'
import ImageBlock from './ImageBlock.tsx'
import TextBlock from './TextBlock.tsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <GoogleDocBlock /> */}
    <ImageBlock/>
    <TextBlock/>
  </React.StrictMode>,
)
