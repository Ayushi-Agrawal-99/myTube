import React from "react";

const chatMessage = ({name,message}) => { 
   
    return (
        <div className="flex items-center shadow-sm p-2">
            <img className="h-4" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCSMkWaF4ReLMfiRu3NXk12zJikhfSx0bSQ&usqp=CAU"></img> 
        
            <span className="font-bold px-2 text-sm">{name}</span>
            <span>{message}</span>
        </div>
        
    )
}

export default chatMessage;