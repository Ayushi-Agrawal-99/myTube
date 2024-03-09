import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = ()=>{

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch()
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(()=>{
       const i = setInterval(() => {
            //API Polling
            
            dispatch(addMessage({
                name: generateRandomNames(),
                message: makeRandomMessage(20)
            }))
        }, 500);

        return () => clearInterval(i);

    }, [])
    return(
        <>
        <div className="w-22 h-[400px] ml-10 p-3 border border-gray bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse">
            <div>
                {
                    chatMessages.map((c,index)=> <ChatMessage key={index}
                    name={c.name}
                    message = {c.message}  />)
                }
            </div>
        </div>

        <form className="p-2 ml-10 border border-gray rounded-b-lg flex justify-between" 
            onSubmit={(e) => {
            e.preventDefault();
            dispatch(
                addMessage({
                    name:"Ayushi",
                    message: liveMessage,
            })
            );
            setLiveMessage("");
        }}>
            <input className="px-2 w-96" 
                    type="text" 
                    value={liveMessage} 
                    onChange={(e) => {
                        setLiveMessage(e.target.value)
            }}>   
            </input>
            <button className="px-2 py-1 mx-2 bg-green-100 text-right"> Send </button>
        </form>
        </>
       
    )
}

export default LiveChat;