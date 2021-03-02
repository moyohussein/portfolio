import React from 'react';
import { Link } from "gatsby";
import {
    makeStyles,
    List,
    ListItem,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: `flex`,
      width: `50%`,
      margin: `0 auto`,
      justifyContents: `center`,
      alignContent: `center`,
      borderBottom: `1px solid var(--textNormal)`,
      borderTop: `1px solid var(--textNormal)`,
    },
    listItem: {
      flex: 1,
      padding: 0,
      textAlign: `center`,
    },
    link: {
      color: `var(--textNormal)`,
      textDecoration: `none`,
      fontSize: 16,
      fontFamily: `Alata`,
      fontWeight: `600`,
      padding: theme.spacing(1),
      width: `100%`,
      '&:hover': {
        textShadow: `0 0 5px var(--hr), 0 0 10px var(--hr),
                     0 0 20px var(--hr), 0 0 10px var(--hr),
                     0 0 20px var(--hr)`,
      },
    },
}));


const NavBar = () => {
  const classes = useStyles();
  const links = [
    {
      className: classes.link,
      activeClassName: classes.active,
      to: '/',
      name: 'Home'
    },
    {
        className: classes.link,
        activeClassName: classes.active,
        to: '/about',
        name: 'About'
    },
    {
        className: classes.link,
        activeClassName: classes.active,
        to: '/portfolio',
        name: 'Portfolio'
    },
    {
        className: classes.link,
        activeClassName: classes.active,
        to: '/codelab',
        name: 'Code Lab'
    },
  ];  

  const listings= links.map(link => {
    
    return (
      <ListItem
        button
        disableGutters
        className={classes.listItem}
      >
        <Link
          className={link.className}
          activeClassName={link.activeClassName}
          activeStyle=
          {{
            color: `var(--hr)`, 
            backgroundColor: `var(--bg-secondary)`, 
            textShadow: 'none'
          }}
          to={link.to}>
            {link.name}
        </Link>
      </ListItem>
    )
  })

    return (  
          <List 
            component="nav"
            disablePadding
            className={classes.root}
          >
            {listings}
          </List>
    );
}
 
export default NavBar;