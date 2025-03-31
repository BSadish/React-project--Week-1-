import React, { createContext, useState } from 'react';
import ChildA from './components/ChildA';


//step1: create context
// const UserContext = createContext();

//setp2: wrap all the child inside a provider
//step3: pass the value
//step4: consumer k andar jaake consume karlo

const ThemeContext=createContext();
const App = () => {
  // const [user,setUser]=useState({name:"love"})

  const [theme,setTheme]=useState('light')
  return (
 
     

<ThemeContext.Provider value={{theme,setTheme}}>
  <div className={`h-100 w-100 border-2 border-black flex justify-center flex-col items-center m-10 bg-amber-200 ${theme==='light'?'bg-gray-100':'bg-black'}`}>
    <ChildA/>
  </div>
  
</ThemeContext.Provider>

 
  );
};

export default App;
export {ThemeContext}
