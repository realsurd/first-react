import React from "react";
import swimmerBnB from "./images/image 12.png";
import starBnB from "./images/Star 1.png";

 
const Card = (props) => {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText ="ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="}card--badge">{badgeText}</div>}
            <img src ={swimmerBnB} alt="swim" className="card--image" />
            <div className="card--stats">
            <img src ={starBnB} alt="star" className="card--star" />
            <span>{props.item.stats.rating}</span>
            <span className="grey">{props.item.stats.reviewCount} .</span>
            <span className="grey">{props.item.country}</span>
            </div>
             <p>{props.item.title}</p>
            <p><span className="bold">{props.item.price} / person</span></p>

        </div>
    )
}


export default Card;