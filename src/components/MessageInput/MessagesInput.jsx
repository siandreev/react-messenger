import variables from 'styles/variables.scss'

import {styled} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

const IconButtonJSS = styled(IconButton)({
    color: "white",
    height: 40,
    width: 40,
    "& i": {
        "font-size": 14
    },
    "&:hover, &.Mui-focusVisible": {
        color: variables.active,
        backgroundColor: variables.secondary
    }
});

export {IconButtonJSS as IconButton}