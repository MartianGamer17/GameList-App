import React, { useEffect,useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({genereId}) {
    

    const[genreList,setGenreList]=useState([])
    const [activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList =() =>{
        GlobalApi.getGenreList.then((res)=>{
            console.log(res.data.results);
            setGenreList(res.data.results);
        })
    }
    
  
    return (
    
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
        {genreList.map((item,index)=>(

            <div
            onClick={()=>{setActiveIndex(index);genereId(item.id)}} 
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-400 p-2 group rounded-lg hover:dark:bg-gray-600 ${activeIndex==index? "bg-gray-300 dark:bg-gray-600":null }`  }>
                <img src={item.image_background} className={`w-[40px] h-[40px] 
                object-cover rounded-lg group-hover:scale-110  
                transition-all duration-300 ${activeIndex==index?"scale-110":null} `}/>
                <h3 className={`text-[18px] group-hover:font-bold   dark:text-white
                transition-all duration-300 ${activeIndex==index?"font-bold":null}`}>{item.name}</h3> 
            </div>   
        ))}
    </div>
  )
}

export default GenreList