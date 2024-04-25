import { useEffect, useState } from "react"
import genreids from '../utility/genre';

const WatchList = ({ watchList, setWatchList , handleRemoveFromWatchList}) => {

  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(["All Genres"])
  const [currentGenre, setCurrentGenre] = useState('All Genres');


  let handleSearch = (e) => {
    setSearch(e.target.value);
  }



  let sortIncreasing = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    })
    setWatchList([...sortedInc])
  }


  let sortDecreasing = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    })
    setWatchList([...sortedDec])
  }

  let sortPopularityInc = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    })
    setWatchList([...sortedInc])
  }


  let sortPopularityDec = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    })
    setWatchList([...sortedDec])
  }




  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp])
  })

  let handleFilter=(genre)=>{
        setCurrentGenre(genre);
  }
  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre) => {
          return <><div onClick={()=>handleFilter(genre)} className={ currentGenre==genre?'bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center m-4 hover:cursor-pointer':'bg-gray-400/50 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center m-4 hover:cursor-pointer'} >
              {genre}
            </div>
            
            </>
        })}



      </div>













      <div className='flex justify-center my-4'>
        <input type="text" onChange={handleSearch} value={search} className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' placeholder="Search Movies" />

      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className="border-b-2">
            <tr className="">
              <th>Name</th>
              <div className="flex justify-center space-x-10">
                <th className="flex justify-center ">
                  <div onClick={sortIncreasing} className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-up"></i></div>
                  <div className="p-2">Ratings</div>
                  <div onClick={sortDecreasing} className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-down"></i></div>
                </th>

                <th className="flex justify-center">
                  <div onClick={sortPopularityInc} className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-up"></i></div>
                  <div className="p-2">Popularity</div>
                  <div onClick={sortPopularityDec} className="p-2 hover:cursor-pointer"><i className="fa-solid fa-arrow-down"></i></div>
                </th>
              </div>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieObj)=>{
                if(currentGenre=='All Genres'){
                  return true;
                }
                else{
                  return genreids[movieObj.genre_ids[0]]==currentGenre;
                }
            }).filter((movieObj) => {
              return movieObj.title.toLowerCase().includes(search.toLowerCase());
            }).map((movieObj) => {
              return <tr className='border-b-2'>
                <td className='flex items-center px-5 py-4'>
                  <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} />
                  <div className='mx-10'>{movieObj.original_title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>handleRemoveFromWatchList(movieObj)} className='text-red-800 hover:cursor-pointer'>Delete</td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList
