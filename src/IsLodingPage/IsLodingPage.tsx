import "./islodingpage.css"


// ==============>>>>>> React Component for Loading Indicator<<<<<=============
// This component is, for displaying a loading indicator while data is being fetched.Displays a simple loading animation with a "Processing..." message.

const IsLodingPage = () => {
  return (
    <>
    <div id="loding" className="flex flex-col">
        <div className="ball mx-auto mt-[12rem]"></div>
        <p className="mx-auto mt-[2rem]">  Processing...</p>
    </div>
    
    </>
  )
}

export default IsLodingPage
