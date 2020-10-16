import React from "react";

import "./ListItem.scss"

function ListItem({person, clickHandler, isActive}) {
    const message = person.isIncoming ? person.message : `You: ${person.message}`;
    const active = isActive ? " list-item_active" : "";
    return (
        <li className={"list-item" + active} onClick={() => clickHandler(person.tag)}>
            <div className="list-item__img">
                <img src={person.img} alt=""/>
            </div>
            <div className="list-item__text-data">
                <div className="list-item__name"><span>{person.firstName + " " + person.lastName}</span></div>
                <div className="list-item__message"><span>{message}</span></div>
            </div>
            <hr/>
        </li>
    )
}

export default ListItem;