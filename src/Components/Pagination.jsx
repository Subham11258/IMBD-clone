

const Pagination = ({ pageNo , handlePrev, handleNext}) => {
  return (
    <div className="bg-gray-500 text-white text-center p-4 mt-8 flex justify-center">
      <div onClick={handlePrev} className="px-8 hover:cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
