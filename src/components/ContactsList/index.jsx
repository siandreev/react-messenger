import React from 'react';
import ListItem from "components/ListItem";
import SearchBar from "components/SearchBar";
import { Scrollbar } from 'react-scrollbars-custom';

import "./ContactsList.scss"


class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {contacts: props.contacts, selectedDialogTag: undefined};
        this.filterContacts = this.filterContacts.bind(this);


    }

    filterContacts(substr) {
        const filtered = this.props.contacts.filter(person =>
            person.userInfo.firstName.includes(substr) || person.userInfo.lastName.includes(substr))
        console.log(filtered);
        this.setState({contacts: filtered})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedDialogTag && this.props.selectedDialogTag !== prevState.selectedDialogTag) {
            this.setState({
                selectedDialogTag: this.props.selectedDialogTag
            });
        }
        if (this.props.contacts !== prevProps.contacts) {
            this.setState({
                contacts: this.props.contacts
            });
        }
    }

    onClick(tag) {
        this.setState({
            selectedDialogTag: tag
        })
        this.props.onSelect(tag);
    }

    render() {
        const contacts = this.props.selfInfo ? this.state.contacts : [];
        return (
            <div className="contacts-list">
                <SearchBar filter={this.filterContacts}/>
                <Scrollbar style={{"height": "calc(100% - 80px)"}}>
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
                                        isOnline: item.userInfo.isOnline,
                                        img: `http://localhost:8000/${item.userInfo.img}`
                                     }}
                                    clickHandler={this.onClick}
                                    isActive={this.state.selectedDialogTag === item.userInfo.tag}
                                />)
                        }
                    </ul>
                </Scrollbar>
            </div>
        );
    }
}

export default ContactsList;