import {styled} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import variables from 'styles/variables.scss';

const TextFieldJSS = styled(TextField)({
    width: 250,
    '& .MuiTypography-colorTextSecondary': {
      color: variables.smoked
    },
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
        '&::placeholder': {
            color: variables.white
        }
    }
});

const InputAdornmentJSS = styled(InputAdornment)({
    color: variables.smoked
});

export {TextFieldJSS as TextField, InputAdornmentJSS as InputAdornment};