import React, { useMemo, useState } from "react";
import { calculatePrime } from "../utils/helper";

const Demo = () => {

    const [text, setText] = useState(0);

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    /* calculating prime withour useMemo and it getting called even on theme changes as state variable for theme is updating
    const prime = () => {
        console.log("calculating prime no " + text)
        calculatePrime(text); // heavy operation
    }*/

    const prime = useMemo(() => calculatePrime(text),[text]);
    return (
        <div className= { 
            "m-2 p-2 h-96 w-96 border border-black" + 
            (isDarkTheme && " text-white bg-stone-800")
            }>
            <div>
                <button className="rounded-lg m-2 px-2 py-1 bg-green-300" onClick={() => {
                    setIsDarkTheme(!isDarkTheme)
                }}> Theme Change </button>
            </div>
            
            <div>
                <input 
                    className = "border border-black w-72 px-2 py-1 text-black" 
                    type="number" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)
                    }>
                </input>
            </div>

            <div>
               <h1 className="font-bold text-lg"> nth prime number : {prime}</h1>
            </div>
        </div>
    )
}

export default Demo;