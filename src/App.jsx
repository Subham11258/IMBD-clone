
import './App.css'
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'
import WatchList from './Components/WatchList'
import Banner from './Components/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {


  let [watchList,setWatchList] = useState([]);


  let handleAddToWatchList=(movieObj)=>{
        let newWatchList = [...watchList, movieObj];
        localStorage.setItem('moviesApp',JSON.stringify(newWatchList));
        setWatchList(newWatchList);
        console.log(watchList);
  }
  
  let handleRemoveFromWatchList =(movieObj)=>{
    let filteredWatchList = watchList.filter((movie)=>{
      return movie.id != movieObj.id;
    })
    setWatchList(filteredWatchList);
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if(!moviesFromLocalStorage){
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  },[])


  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<><Banner/><Movies handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList} /></>}/>
        <Route path="/watchlist" element={<><WatchList watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/></>}/>
        
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
