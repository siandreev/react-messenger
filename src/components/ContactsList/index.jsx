import React from 'react';
import ListItem from "components/ListItem";
import SearchBar from "components/SearchBar";

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

    render() {
        return (
            <div className="contacts-list">
                <SearchBar filter={this.filterContacts}/>
                <div>
                    {
                        this.state.contacts.map((item, index) => <ListItem person={item}/>)
                    }
                </div>
            </div>
        );
    }
}

export default ContactsList;