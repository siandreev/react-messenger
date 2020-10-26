import React from "react";
import Avatar from "components/Avatar"
import "./ListItem.scss"

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ""
        }

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onMouseEnter() {
        this.setState({
            status: "hovered"
        });
    }

    onMouseLeave() {
        this.setState({
            status: ""
        });

    }

    onSelect() {
        this.props.clickHandler(this.props.person.tag);
    }

    render() {
        const person = this.props.person;

        let modifier;
        if (person.unreadCount) {
            if (person.isIncoming) {
                modifier = (
                    <div className="list-item__new-messages">
                        {person.unreadCount}
                    </div>
                );
            } else {
                modifier = <div className="list-item__unread-messages"/>;
            }
        }


        const avatarStatus = this.props.isActive ? "selected" : this.state.status;
        const isActive = this.props.isActive;
        const message = person.isIncoming ? person.message : `You: ${person.message}`;
        const active = isActive ? " list-item_active" : "";
        return (
            <li
                className={"list-item" + active}
                onClick={this.onSelect}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <div className="list-item__img">
                    <Avatar
                        url={person.img}
                        status={avatarStatus}
                        isOnline={person.isOnline}
                        color="secondary"
                        hoverColor="hovered"/>
                </div>
                <div className="list-item__text-data">
                    <div className="list-item__name"><span>{person.firstName + " " + person.lastName}</span></div>
                    <div className="list-item__message"><span>{message}</span></div>
                </div>
                {modifier}
            </li>
        )
    }
}

export default ListItem;