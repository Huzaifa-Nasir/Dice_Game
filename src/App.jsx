import React from "react"
import HomePage from "./components/HomePage"
import { useState } from "react";
import SecondPage from "./components/SecondPage";

function App() {
    const [isGameStarted,setisGameStarted] = useState(false);
    function isToogle ()
    {
        if(!isGameStarted)
        {
            setisGameStarted(true);
        }
        else{
            setisGameStarted(false);
        }
    }
    return(
 <>

          {isGameStarted?<SecondPage/>:<HomePage toogle={isToogle}/>}
 </>
 );
}

export default App
