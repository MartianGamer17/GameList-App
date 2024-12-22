import React, { useEffect, useState } from 'react'
import logo  from './../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import useTheme from '../Context/ThemeContext';
export default function Header() {
  const [toggle,setToggle]=useState(false)
  
  const{themeMode,lightTheme,darkTheme}=useTheme()


  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={60} height={60} className='ml-1'/>
        <div className='flex bg-slate-200 p-2 w-full items-center mx-3 rounded-full'>
            <FaSearch/>
            <input type="text" placeholder='Search Games' className='px-2 bg-transparent outline-none '/>
        </div>
        <div>
          {toggle?<FaMoon className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer ' onClick={()=>{setToggle(!toggle), lightTheme()}}/>:<IoIosSunny className='text-[35px] bg-slate-200 p-1 rounded-full cursor-pointer' onClick={()=>{setToggle(!toggle), darkTheme()}} />}
          
          
        </div>
    </div>
  ) 
}
