import React from "react";
import Badge from '@material-ui/core/Badge';
import AvatarMUI from '@material-ui/core/Avatar';
import {withStyles} from "@material-ui/core/styles";

import variables from 'styles/variables.scss'

function Avatar({url, status, isOnline}) {
    let dotColor = variables.active;
    let dotBorderColor = variables.secondary;
    if (status === "selected") {
        dotColor = variables.secondary;
        dotBorderColor = variables.active;
    } else if(status === "hovered") {
        dotBorderColor = variables.hovered;
    }
    const BadgeJSS = withStyles(() => ({
        badge: {
            backgroundColor: dotColor,
            color: dotColor,
            boxShadow: `0 0 0 2px ${dotBorderColor}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                content: '""',
            },
        }
    }))(Badge);

    const AvatarJSS = withStyles(() => ({
        root: {
            width: 40,
            height: 40
        },
    }))(AvatarMUI);

    if (isOnline) {
        return(
            <BadgeJSS
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <AvatarJSS alt="" src={url} />
            </BadgeJSS>
        )
    } else {
        return <AvatarJSS alt="" src={url} />
    }


}

export default Avatar;