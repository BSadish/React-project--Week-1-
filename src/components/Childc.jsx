import React, { useContext } from 'react'
import {ThemeContext} from '../App'


const Childc = () => {

const {theme,setTheme} = useContext(ThemeContext);

function handleclick(){
if(theme=='light')

    setTheme('dark')
    // console.log("dark")
    else
    setTheme('light')


}
  return (
    <div>
     <button className='m-5 border-2 p-1 rounded-[5px] bg-white text-black cursor-pointer' onClick={handleclick}>Change Theme</button>
    </div>
  )
}

export default Childc
