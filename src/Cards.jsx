import React from "react";
import Images from "./Images";
const Cards = (props) => {
    return <>
        <div className="cards">
            <div className="card">
              <Images src={props.src}/>
                <div className="card__info">
                    <span className="card__category">{props.title} {props.className}</span>
                        <h3 className="card__title">{props.sname}</h3>
                        <a href={props.links} target="_blank" >
                        <button>Watch Now</button>
                        </a>
                </div>
            </div>
        </div>
    </>
}

export default Cards;