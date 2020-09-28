import React from "react";

import "./ListItem.scss"

function ListItem({person}) {
    return (
        <li className="list-item">
            <div className="list-item__img">
                <img src={person.img} alt=""/>
            </div>
            <div className="list-item__text-data">
                <div className="list-item__name"><span>{person.firstName + " " + person.lastName}</span></div>
                <div className="list-item__message"><span>{person.message}</span></div>
            </div>
            <hr/>
        </li>
    )
}

export default ListItem;