import React from "react";
import {IconButton, ModalMui} from "./Modal";

import "./Modal.scss"

function Modal({open, onClose, header, text}) {
    return (
        <ModalMui
            open={open}
            onClose={onClose}
        >
            <div className="modal__wrapper">
                <IconButton onClick={onClose}>
                    <i className="fas fa-times" />
                </IconButton>
                <div className="modal__header">
                    <h2>{header}</h2>
                </div>
                <div className="modal__body">
                    {text}
                </div>
            </div>
        </ModalMui>
    );
}

export default Modal;