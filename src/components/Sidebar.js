import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>{

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return !isMenuOpen ? null : (
        <div className="p-2 shadow-lg w-48">

            <ul className="mt-5">
                <li className="flex"> 
                    <img className="w-10  m-1" alt="home" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEX///8AAABOTk5aWlrr6+ulpaVhYWFoaGhpaWllZWXn5+cRERF0dHTc3Nz39/fv7+8LCwscHBy9vb2GhoYvLy82NjYoKCgiIiI8PDzOzs5HR0d/f3+YmJgUFBSKioqrq6tr7VAsAAACdElEQVR4nO3ZbVOjMBSG4aSLfYEWaqtS7ar//19uYxZEmmhKO2aSc19fdGeCA4/nOXRcpQAAAAAAAAAAAAAAAAAAAAAAAAAAAADI9Df2DcS31MvYtxDbSmu9in0Tcc21MY99GzEttSW4DnPdETsJK/1J6E5Y6KFF7NuJYa6/EliHhR4TNwmrswjE7YRxEQTWYemMQNTnBPcUiJoE1y4QthPO3whDIt4O/iKIqcP3UyBiEr7bBUJ2wk9FEFAH3+eCsYw/J4RNQdaTELILOpnuhJ/fCENZvh3Ci2BlWIdLimBlV4fLI8guhEuLYGVVh8vW4aeMFuOUIljZ1GFaEaxM6jC1CFYWdbhmCjKZhOm7oJP8TriuCFbidbi2CFbSdbjFFBgJT8L1u6CT7E64TRGsROtwqyJYSdbhllNgJDgJobugaqvAk8nthLAirHdlUzflbh10OrE6BBVhX/fn633IBUnVYViEV88DPWy+XLJ5CAghoUkYjvb22f04j/XoovrRffDtfvCPdZTnmaJ46m+6LRr3FIwjOIXgnoT3pu2/fyoiPM1ERfe7uy9V4XyyjeOqjfPknSr7n5ZQBH0IVancGeydVzkX451SZZVgBP/r0JqbdmZw3gSj9mSgijaxIlhF9TEF7gyOnouOngzMJFTJRXB69kNpvzqe69lzjesd8pGBKg8JRtBzZLBtPGebrS+DtDkyOHgPH8Rk8OI9/CImg5n38IwMyECRgUEGZGCQARkYZEAGBhmQgUEGZGCQARkYZEAGBhlIykDc3xOb2Z8x33+xKHU8Ozvb/eK9AgAAAAAAAAAAAAAAAAAAAAAAAAAAAPhN/wAZjRbgiANsYQAAAABJRU5ErkJggg=="></img>
                    <Link to="/">Home</Link>
                </li>
                <li className="flex">
                    <img className="w-10  m-1" alt="shorts" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmc6pRnovqQexiLuoN6xu3iMKId9I2iHC3pQ&usqp=CAU"></img>
                    Shorts
                </li>

                <li className="flex px-2">
                <img className="w-7 m-1" alt="videos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7mA7UkkEygTUjzYCb-54i4h0gkxQoEEDdw&usqp=CAU"></img>
                    Videos
                    </li>
                <li className="flex px-3">
                <img className="w-6 m-1" alt="live" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-T617G6BvgyMwb8GRus7WE0CxoISaPMZnw&usqp=CAU"></img>
                    Live
                    </li>
            </ul>

            <h1 className="font-bold pt-5 px-3">Subscriptions</h1>
            <ul className="px-5 mt-1">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="font-bold pt-5 px-3">Explore</h1>
            <ul className="px-5 mt-1">
                <li>Trending</li>
                <li>Shopping</li>
                <li>Podcasts</li>
                <li>News</li>
            </ul>
        </div>
    )
}

export default Sidebar;