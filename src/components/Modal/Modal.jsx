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
    left: '93%',
    top: '-3%',
    color: variables.secondary
});

export {ModalJSS as ModalMui, IconButtonJSS as IconButton}