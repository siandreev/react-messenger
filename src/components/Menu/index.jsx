import React from "react";
import {slide as Burger} from "react-burger-menu";
import ButtonBase from '@material-ui/core/ButtonBase';

import "./Menu.scss";

class Menu extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const img = "http://localhost:8000/dde36dad96c69fc2190d1763363714f3.png";
        return (
            <Burger pageWrapId={"page-wrap"}>
                <div className="menu">
                    <div className="menu__img" style={{backgroundImage : `url(${img})`}}>
                       <div className="menu__personal-data-wrapper">
                           <div className="menu__name">Луи Армстронг</div>
                           <div className="menu__tag">@siandreev</div>
                       </div>
                    </div>
                    <div className="menu__options-list">
                        <ButtonBase style={{width: "100%"}}>
                            <div className="option">
                                <span className="option__icon-wrapper">
                                    <i className="far fa-address-card" />
                                </span>
                                <span className="option__text-wrapper">Add contact</span>
                            </div>
                        </ButtonBase>
                        <ButtonBase style={{width: "100%"}}>
                            <div className="option">
                                    <span className="option__icon-wrapper">
                                        <i className="fas fa-cog" />
                                    </span>
                                    <span className="option__text-wrapper">Settings</span>
                            </div>
                        </ButtonBase>
                        <ButtonBase style={{width: "100%"}}>
                            <div className="option">
                                <span className="option__icon-wrapper">
                                    <i className="fas fa-info-circle" />
                                </span>
                                <span className="option__text-wrapper">About</span>
                            </div>
                        </ButtonBase>
                    </div>
                    <div className="menu__exit-wrapper">
                        <ButtonBase style={{width: "100%"}}>
                            <div className="option">
                                <span className="option__icon-wrapper">
                                    <i className="fas fa-times" />
                                </span>
                                <span className="option__text-wrapper option__text-wrapper_danger">Exit</span>
                            </div>
                        </ButtonBase>
                    </div>
                </div>
            </Burger>
        )
    }
}

export default Menu;