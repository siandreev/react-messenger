import variables from 'styles/variables.scss'

import {styled} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {IconButton} from "@material-ui/core";


const ModalJSS = styled(Modal)({
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center'
});

const IconButtonJSS = styled(IconButton)({
    position: 'absolute',
    right: '5px',
    top: '5px',
    color: variables.active
});

export {ModalJSS as ModalMui, IconButtonJSS as IconButton}