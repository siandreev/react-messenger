import React from 'react';
import Loader from "react-spinners/ClipLoader";

import variables from "styles/variables.scss"
import "./WaitAnimation.scss"

class WaitAnimation extends React.PureComponent {
    render() {
        return (
            <div className="wait">
                <Loader
                    size={300}
                    color={variables.active}
                    loading={true}
                />
            </div>
        );
    }
}

export default WaitAnimation;