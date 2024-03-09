import React from "react";

const VideoCards = ({info}) => {
       
    return(
        <div className="p-2 m-2 w-60 shadow-lg content-center">
                <img className="rounded-lg" alt="thumbnail" src={info?.snippet?.thumbnails?.medium?.url}></img>
                <ul className="p-1 my-2">
                    <li className="font-bold py-1">{info?.snippet?.channelTitle}</li>
                    <li className="text-xs my-1">{info?.snippet?.title.toLowerCase()}</li>
                    <li className="text-xs">{info?.statistics?.viewCount} views</li>
                </ul>
        </div>
    )
    
}

export default VideoCards;