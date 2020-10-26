import React from 'react';
import {connect} from 'react-redux';
import menuActions from "./action";
import { Menu } from "components";

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmedExit: false
        }
    }


    onExit() {
        this.props.exit();
        this.setState({confirmedExit: true});
    }

    render() {
        return (
            <Menu
                wsp={this.props.wsp}
                onSelect={this.props.onSelect}
                selfInfo={this.props.selfInfo}
                onExit={this.onExit.bind(this)}
                confirmedExit={(!this.props.selfInfo && this.state.confirmedExit)}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        selfInfo: state.socket.selfInfo
    };
}

export default connect(
    mapStateToProps,
    menuActions,
)(MenuContainer);