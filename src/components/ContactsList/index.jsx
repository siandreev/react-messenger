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

    render() {
        return (
            <div className="contacts-list">
                <SearchBar filter={this.filterContacts}/>
                <Scrollbar style={{"height": "100%"}}>
                    <div >
                    <ul className="contacts-list__ul">
                        {
                            this.state.contacts.map((item, index) => <ListItem key={index} person={item}/>)
                        }
                    </ul>
                    </div>
                </Scrollbar>
            </div>
        );
    }
}

export default ContactsList;