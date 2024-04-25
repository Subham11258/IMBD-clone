

const MovieCard = (props) => {

  function doesContain(movieObj){
    for(let i=0;i<props.watchList.length;i++){
      if(props.watchList[i].id==movieObj.id){
          return true;
      }


    }
    return false;

  }

  return (
    <div className='h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.poster_path}')`}}>
      

      {doesContain(props.movieObj)?
      <div className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60" onClick={()=>{props.handleRemoveFromWatchList(props.movieObj)}}>&#10060;</div>:
      <div onClick={()=>{props.handleAddToWatchList(props.movieObj)}} className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">
        &#128525;
      </div>}

      <div className='text-white text-xl w-full p-2 text-center rounded-b-xl bg-gray-900/60'>
        {props.name}
      </div>
      

    </div>
  )
}

export default MovieCard

//https://api.themoviedb.org/3/movie/popular?api_key=86d1b437abf1d429d0a7aa3af5fb096c&language=en-US&page=1
