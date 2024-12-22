import React, { useEffect } from 'react'

function Banner({gameBanner}) {
    useEffect(()=>{
        console.log(gameBanner)
    },[])
  return (
    <div className='relative m-3'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent  w-full'>
            <h2 className='text-24px text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white px-2 py-1'>Get Now</button>
        </div>
        <img src={gameBanner.background_image} className='md:h-[320px] w-full object-cover round rounded-lg '/>
    </div>
  )
}

export default Banner