import React, { useState } from 'react';
import createPersistedState from 'use-persisted-state';
import Switch from "@material-ui/core/Switch";
import { withStyles } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Box from "@material-ui/core/Box";
import useDarkMode from 'use-dark-mode';

const ThemeSwitch = withStyles({
    root: {
      width: 80,
      height: 48,
      padding: 8,
      fontFamily: `Alata`,
    },
    switchBase: {
      padding: 11,
      color: '#ff6a00',
    },
    thumb: {
      width: 26,
      height: 26,
      backgroundColor: '#fff',
    },
    track: {
      background: 'black',
      opacity: '1 !important',
      borderRadius: 20,
      position: 'relative',
      '&:before, &:after': {
        display: 'inline-block',
        position: 'absolute',
        top: '50%',
        width: '50%',
        transform: 'translateY(-50%)',
        color: '#fff',
        textAlign: 'center',
      },
      '&:before': {
        content: '"on"',
        left: 4,
        opacity: 0,
      },
      '&:after': {
        content: '"off"',
        right: 4,
      },
    },
    checked: {
      '&$switchBase': {
        color: '#185a9d',
        transform: 'translateX(32px)',
        '&:hover': {
          backgroundColor: 'rgba(24,90,257,0.08)',
        },
      },
      '& $thumb': {
        backgroundColor: '#fff',
      },
      '& + $track': {
        background: 'linear-gradient(to right, #43cea2, #185a9d)',
        '&:before': {
          opacity: 1,
        },
        '&:after': {
          opacity: 0,
        }
      }
    }
  })(Switch);

  const useCheckedState = createPersistedState('checked');

const SwitchBtn = () => {
    const classes= withStyles();
    const darkMode = useDarkMode(false);
    
    const [checked, setChecked] = useCheckedState(false);
    const toggleChecked = event => {
        setChecked(event.target.checked);
        darkMode.toggle();
    };
    
    return (  
        <Box position= "absolute" top="3%" right="25%">
            <ThemeSwitch 
                checked={checked}
                onChange={toggleChecked}
                disableRipple
                name="checked"
                icon=
                {
                    <Brightness3Icon style=
                    {{
                    color:`whitesmoke`, 
                    transform: `rotate(45deg)`, 
                    marginTop: 2
                    }} />
                }
                checkedIcon=
                {
                    <Brightness3Icon style=
                    {{
                    color:`whitesmoke`, 
                    transform: `rotate(45deg)`, 
                    marginTop: 2
                    }} />
                }
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
            />
        </Box>
    );
}
 
export default SwitchBtn;
