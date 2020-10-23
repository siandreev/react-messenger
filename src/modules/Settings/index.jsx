import React from 'react';
import Settings from "components/Settings";
import api from "core/axios/api.js";
import {connect} from "react-redux";
import windowActions from "modules/Window/action";

class SettingsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changes: false
        }

    }

    uploadImage(formData) {
        this.setState({
            uploadingProcess: true
        });
        api.uploadImage(formData).then(response => {
            if (response.status === "OK") {
                this.setState({
                    newImage: response.data.fileName,
                    uploadingProcess: false
                })
            }
        })
    }

    saveChanges(firstName, lastName, img) {
        this.props.updateSelfInfo(this.props.wsp, [firstName, lastName, img]);
    }

    render() {
        return (
            <Settings
                uploadImage={this.uploadImage.bind(this)}
                saveChanges={this.saveChanges.bind(this)}
                newImage={this.state.newImage}
                uploadingProcess={this.state.uploadingProcess}
                selfInfo={this.props.selfInfo}
                onClose={this.props.onClose}
            />
        );
    }
}

export default connect(null, windowActions)(SettingsContainer);