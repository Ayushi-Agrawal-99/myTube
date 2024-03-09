import React, { useRef, useState } from "react";

const Demo2 = () => {

    let x = 0;
   const [y, setY] = useState(0);
   const ref = useRef(0);   // ref is basically an object holding the hardcoded value in a current key

    return(
        <div className="m-2 p-2 border border-black w-96 h-96">
            <div>
                <button 
                className="text-xl m-2 py-2 px-5 bg-green-300 rounded-sm"
                onClick={ () => {
                    x = x + 1;
                    console.log(x);
                }}>Increase x </button>
                <span className="font-bold text-xl"> Let = {x}</span>
            </div>

            <div>
                <button 
                className="text-xl m-2 py-2 px-5 bg-green-300 rounded-sm"
                onClick={ () => {
                    setY(y+1);
                }}>Increase y </button>
                <span className="font-bold text-xl"> State = {y}</span>
            </div>

            <div>
                <button 
                className="text-xl m-2 py-2 px-5 bg-green-300 rounded-sm"
                onClick={ () => {
                    ref.current = ref.current + 1;
                }}>Increase ref </button>
                <span className="font-bold text-xl"> Ref = {ref.current}</span>
            </div>
        </div>
    )
}

export default Demo2;