import React from 'react';
import ListItem from "components/ListItem";
import SearchBar from "components/SearchBar";
import { Scrollbar } from 'react-scrollbars-custom';

import "./ContactsList.scss"


class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: props.contacts};
        this.filterContacts = this.filterContacts.bind(this);
    }

    filterContacts(substr) {
        const filtered = this.props.contacts.filter(person =>
            person.firstName.includes(substr) || person.lastName.includes(substr))
        this.setState({contacts: filtered})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(this.props.contacts) !== JSON.stringify(this.state.contacts)) {
            this.setState({
                contacts: this.props.contacts
            })
        }

    }

    render() {
        const contacts = this.props.selfInfo ? this.state.contacts : [];
        return (
            <div className="contacts-list">
                <SearchBar filter={this.filterContacts}/>
                <Scrollbar style={{"height": "100%"}}>
                    <div>
                    <ul className="contacts-list__ul">
                        {
                            contacts.map(item =>
                                <ListItem
                                    key={item._id}
                                    person={{
                                        isIncoming: this.props.selfInfo.tag === item.receiverTag,
                                        tag: item.userInfo.tag,
                                        firstName: item.userInfo.firstName,
                                        lastName: item.userInfo.lastName,
                                        message: item.text,
                                        img: "https://24smi.org/public/media/resize/800x-/2017/4/26/05_SUGf1Kr.jpg"
                                     }}
                                    clickHandler={this.props.onSelect}
                                />)
                        }
                    </ul>
                    </div>
                </Scrollbar>
            </div>
        );
    }
}

export default ContactsList;