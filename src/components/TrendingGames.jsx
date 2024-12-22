import React from 'react'

function TrendingGames({gameList}) {
  
    
    return (
    <div className='mt-5'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
    
    <div className='hidden md:grid  md:grid-cols-3 gap-4 lg:grid-cols-4 ml-2'>
        {gameList.map((item,index)=>index<4&&(
            <div className=' bg-blue-600 rounded-lg group
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer mt-5' >
                <img src={item.background_image}  className='h-[270px] rounded-lg object-cover'/>
                <h2 className='dark:text-white text-[20px] font-bold p-4'>{item.name}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default TrendingGames