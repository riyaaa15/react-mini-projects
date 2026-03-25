import { useState } from "react";
import "./LikeCount.css";

export default function LikeCount() {

    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks] = useState(0);

    let togglelike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }
     let likeStyle  = {color: "red"};

    return (
        <div>
            <p className="text">Clicks = {clicks}</p>
            <p onClick={togglelike}>
               {isLiked ? (
                 <i className="fa-solid fa-heart" style={likeStyle}></i>
               ) : (
                <i className="fa-regular fa-heart"></i>
               )}
            </p>
        </div>
    )
}