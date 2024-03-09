import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults} from "../utils/searchSlice";

const Head = () =>{

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search)

    useEffect(()=>{
        //make an APIcall after every key press
        // if the diff between API call is is less than 200ms
        // decline the API call

        const timer =setTimeout(() => {
            if(searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery]);
            }
            else
            {
                getSearchSuggestions();
            }
            
        }, 200 );

        return() => {
            clearTimeout(timer);
        };

    }, [searchQuery]);

    const getSearchSuggestions = async() => {

        const data =  await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }));
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {

        dispatch(toggleMenu());
    }

    return(
        <div className="grid grid-flow-col shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()} 
                    className="h-10 p-2 m-3 cursor-pointer"
                    alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="/>
                <img 
                className="h-16"
                    alt="youtube-logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ14LVGaN_KSdlSAgALQT18-oYukGg7su66A&usqp=CAU"/>
            </div>

            <div className="col-span-10 px-10 m-3">
                <div>
                <input type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    className="p-2 w-1/2 border border-gray-400 rounded-l-lg"></input>
                <button className="py-2 border border-gray-500 rounded-r-lg bg-gray-100 px-5">Search</button>
                </div>
                <div>
                    {
                        showSuggestions && (
                            <ul className="absolute bg-white px-5 w-[450px] rounded-lg shadow-lg border border-gray-100">
                            {
                                suggestions.map((s) => (
                                <li key={s} className="py-2 px-3 cursor-pointer shadow-sm hover:bg-gray-100">{s}</li>
                            ))
                            }
                             </ul>
                        )
                    }
                    
                </div>
                
            </div>

            <div className="col-span-1">
                <img
                    className="h-12 m-3 p-2" 
                    alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCSMkWaF4ReLMfiRu3NXk12zJikhfSx0bSQ&usqp=CAU"></img>
            </div>
        </div>
    )
}

export default Head;