import {styled} from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

import variables from 'styles/variables.scss';


const ButtonBaseJSS = styled(ButtonBase)({
    height: 140,
    width: 140,
    position: "relative",
    "border-radius": "50%"
});

const ButtonJSS = styled(Button)({
    color: variables.active,
    '&.Mui-disabled': {
        color: variables.disabledActive
    }
});

const TextFieldJSS = styled(TextField)({
    width: 250,
    'margin-bottom': 20,
    '& .MuiInput-underline:hover:before': {
        borderBottomColor: variables.white
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: variables.smoked,
        '&:hover' : {
            borderBottomColor: variables.white
        }
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: variables.active
    },
    '& .MuiInput-input': {
        color: variables.smoked,
    },
    '& .Mui-focused input': {
        color: variables.active,
    },
    '& label.Mui-focused': {
        color: variables.active,
    },
    '& label': {
        color: variables.smoked,
    },
});

export {ButtonBaseJSS as ButtonBase, TextFieldJSS as TextField, ButtonJSS as Button};