import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [data,setData]= useState([])
    useEffect(() => {
       
        const fetchdata=async()=>{
            try{

            
            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
            const json=await response.json();
            setData(json.slice(0,5));
        }
        
        catch (error){
            console.error("Error fetching the data",error)
        }
      }
   fetchdata();
    },[]);

  return (
   
      <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
    
  )
}

export default UseEffect
