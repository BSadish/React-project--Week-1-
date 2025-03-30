import React, { useState } from 'react'

const Hello = () => {
const [name, setValue]=useState("")

 function buttonhandle(e){
e.preventDefault();
console.log(name)
 }



  return (
    <div className='flex justify-center h-screen items-center gap-3'>
        
    <form >
        <input className='border-2 mr-3 rounded' type="text" value={name} onChange={(e)=>setValue(e.target.value)}/>

        <button className='border-2 px-2 rounded-[5px] bg-blue-500 text-white font-extrabold border-black cursor-pointer' onClick={buttonhandle}>Submit</button>
    </form>
    </div>
  )
}

export default Hello
