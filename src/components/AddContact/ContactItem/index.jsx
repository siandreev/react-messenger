import React from "react";
import Avatar from "components/Avatar"
import "./ContactItem.scss"
import { ButtonBase } from "./ContactItem";

class ContactItem extends React.Component {
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
        return (
            <li
                className="contact-item"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <ButtonBase style={{width: "100%"}} onClick={this.onSelect}>
                    <div className="contact-item__img">
                        <Avatar url={person.img} status={this.state.status} isOnline={person.isOnline}/>
                    </div>
                    <div className="contact-item__text-data">
                        <div className="contact-item__name"><span>{person.firstName + " " + person.lastName}</span></div>
                        <div className="contact-item__tag"><span>{person.tag}</span></div>
                    </div>
                </ButtonBase>
            </li>
        )
    }
}

export default ContactItem;