import MovieCard from "./MovieCard"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import Pagination from "./Pagination"
const Movies = ({handleAddToWatchList, handleRemoveFromWatchList, watchList}) => {


  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);


  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(1)
    }
    else{
    setPageNo(pageNo-1);
    }
  }

  const handleNext=()=>{
    setPageNo(pageNo+1);
  }


    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=86d1b437abf1d429d0a7aa3af5fb096c&language=en-US&page=${pageNo}`).then(function (res) {
        setMovies(res.data.results);

      })
    }, [pageNo])
  return (
    <div className="p-5">
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>

        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddToWatchList={handleAddToWatchList} movieObj={movieObj} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList} />
        })}

      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies
