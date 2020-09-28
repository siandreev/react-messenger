import React from "react";

import "./ListItem.scss"

function ListItem({person}) {
    return (
        <div className="list-item">
            <div className="list-item__img">
                <img src={person.img} alt=""/>
            </div>
            <div className="list-item__text-data">
                <div className="list-item__name">{person.firstName + " " + person.lastName}</div>
                <div className="list-item__message">{person.message}</div>
            </div>
        </div>
    )
}

export default ListItem;