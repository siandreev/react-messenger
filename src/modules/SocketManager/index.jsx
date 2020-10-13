import React from "react";
import socketManagerActions from "./action";
import {connect} from "react-redux";

class SocketManager extends React.Component {
    constructor(props) {
        super(props);
       // props.receiveMessage("hello world!!!");
    }

    render() {
        return <div style={{height:'100%'}}>
            {this.props.children}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        messages: state.socket
    };
}

export default connect(mapStateToProps, socketManagerActions)(SocketManager);