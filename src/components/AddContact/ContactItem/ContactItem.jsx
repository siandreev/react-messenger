import {styled} from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const ButtonBaseJSS = styled(ButtonBase)({
    width: '100%',
    'text-align' : 'start',
    '&.MuiButtonBase-root': {
        display: 'block'
    }

});

export {ButtonBaseJSS as ButtonBase};