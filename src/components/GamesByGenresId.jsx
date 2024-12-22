import React, { useEffect } from 'react'

function GamesByGenresId({gameList}) {

  useEffect(() =>{
    console.log(gameList)
  },[])
  return (
    <>
    <h2 className='font-bold text-[30px] dark:text-white mt-5 ml-2'>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-2'>{gameList.map((item)=>(
      <div className='bg-purple-500 p-3 rounded-lg  pb-10 h-full hover:scale-110 cursor-pointer transition-all ease-in-out duration-300' >
          <img src={item.background_image} className='w-full h-[70%]
          rounded-xl object-cover' />
          <h2 className='text-[20px] text-black font-bold dark:text-white '>{item.name}<span className='p-1 rounded-sm ml-2  text-[15px] bg-green-100  text-green-700 font-medium'>{item.metacritic}</span></h2>
          <h2 className='text-black-500'>  ⭐{item.rating}  💬{item.reviews_count}
           🔥{item.suggestions_count}
          </h2>

      </div>
    ))

    
    }</div>
    </>
  )
}

export default GamesByGenresId