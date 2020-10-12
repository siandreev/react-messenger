import variables from 'styles/variables.scss'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';


const ButtonJSS = styled(Button)({
    background: `linear-gradient(45deg, ${variables.active} 30%, ${variables.lightActive} 90%)`,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

const PaperJSS = styled(Paper)({
    background: 'white',
    'min-width': 400,
    'min-height': 500,
});

const TextFieldJSS = styled(TextField)({
    width: 250,
    '& label.Mui-focused': {
        color: variables.active,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: variables.active,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: variables.active,
        },
        '&:hover fieldset': {
            borderColor: variables.active,
        },
        '&.Mui-focused fieldset': {
            borderColor: variables.active,
        }
    },
    '&.wrong': {
        '& label.Mui-focused': {
            color: 'red',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        }
    }
});

export {ButtonJSS as Button, PaperJSS as Paper, TextFieldJSS as TextField};