import React from 'react';
import {connect} from 'react-redux';
import { AddContact } from "components";
import addContactAction from "./action";

class AddContactContainer extends React.Component {
    constructor(props) {
        super(props);
        this.updateList = this.updateList.bind(this);
    }

    updateList(tag) {
        this.props.fetchContacts(this.props.wsp, tag);
    }

    componentDidMount() {
        this.updateList("");
    }

    render() {
        return (
            <AddContact
                open={true}
                onClose={this.props.onClose}
                onSelect={this.props.onSelect}
                updateList={this.updateList}
                contacts={this.props.contacts ? this.props.contacts : []}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.addContact.contacts
    };
}

export default connect(
    mapStateToProps,
    addContactAction
)(AddContactContainer);