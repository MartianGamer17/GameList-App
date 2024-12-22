import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
// import  {ThemeContext}  from './Context/ThemeContext'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [themeMode,setThemeMode]=useState('light');
  const darkTheme=()=>{
    setThemeMode('dark');
    localStorage.setItem('themeMode','dark');

  }
  const lightTheme=()=>{
    setThemeMode('light'); 
    localStorage.setItem('themeMode','light');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark',"light")
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  useEffect(()=>{
    setThemeMode(localStorage.getItem('themeMode'))
  },[])
  return (
    // <ThemeContext.Provider value={{theme,setTheme}}>
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className={`${themeMode}   ${themeMode=='dark' ?'bg-[#121212]':null} min-h-[100vh] min-w-[90vw] mx-0` }>
      <Header/>
      <Home/>
      
    </div>
    </ThemeProvider>
    
  )
}

export default App
