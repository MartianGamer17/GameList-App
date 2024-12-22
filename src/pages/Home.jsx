import React, { useEffect, useState } from 'react'
import GenreList from '../components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../components/Banner';
import TrendingGames from '../components/TrendingGames';
import GamesByGenresId from '../components/GamesByGenresId';

export default function Home() {
  const [allGameList,setAllGameList]=useState();
  const[gameListByGenres,setGameListByGenre]=useState();

  useEffect(()=>{
    getAllGamesList()
    getGameListByGenreId(4);
  },[])



  const getAllGamesList =()=>{
    GlobalApi.getAllGames.then((res)=>{
      // console.log(res.data.results)
      setAllGameList(res.data.results)
     
      
    })
  }
  const getGameListByGenreId=(id)=>{
    console.log(id)
    if(id!=0)
    {
      GlobalApi.getGameListByGenreId(id).then(resp=>{
        console.log(resp)
        setGameListByGenre(resp.data.results)
    })
    }}


  return (
    
    <div className='grid grid-cols-4 px-1'>
      <div className='  hidden md:block '>
        <GenreList genereId={(genereId)=>getGameListByGenreId(genereId)}/>
      </div>
      <div className='col-span-4  md:col-span-3 '>
        {allGameList?.length>0 &&gameListByGenres.length>0?
        <div>
        <Banner gameBanner={allGameList[0]}/>
        <TrendingGames gameList={allGameList}/>
        <GamesByGenresId gameList={gameListByGenres}/>
        </div>
        :null}
        
        </div>

      
      
    </div>
  )
}
