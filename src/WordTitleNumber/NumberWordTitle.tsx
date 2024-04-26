

interface NumberWordTitleProps {
    numberWordALL: number, 
    word: string,
    onchangeNum: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
const NumberWordTitle = ({numberWordALL, word ,onchangeNum}: NumberWordTitleProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onchangeNum(event);
  };
 
return (
    <>
        <h1 className="text-6xl p-3 m-4 text-[#9825fc]">number words in title :)</h1>
      <div
        id="search-box"
        className="mx-2 justify-center flex w-full text-center"
      >
        <input
          className="p-3 focus:outline-0 disabled:bg-blue-gray-50 rounded-md outline-none md:m-2 m-1 w-4/5 lg:w-4/5 bg-transparent border-2 border-[#9825fc]"
          placeholder="Enter file name ..."
          id="searchInput"
          type="text"
          value={word}
          onChange={handleChange}
         
        />
      </div>
      <h1 className="text-xl p-3 text-center text-blue-500 ">number words in title: <span className="text-5xl text-red-400"> {numberWordALL}</span> </h1>
    </>
)
}
export default NumberWordTitle
