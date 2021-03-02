import React from "react";
import { Link } from "gatsby";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

const Header = () => {
  
  return (
    <header>
      <Box 
        p={1}
        width="100%"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Link 
          to="/" 
          style=
          {{
            color: "white", 
            textDecoration: "none"
          }}
        >
          <Typography 
            variant="h2"
            style=
            {{
              fontFamily: "Italianno",  
              color: `var(--header)`, 
              textShadow:`-1px -1px 0 var(--textNormal),-1px 1px 0 var(--textNormal),1px -1px 0 var(--textNormal),1px 1px 0 var(--textNormal)`,
              WebkitTextStroke: `0.1px var(--text-stroke)`
            }}
          >
            Hussein Abdulqohar
          </Typography>
        </Link>   
      </Box>
  </header>
  );
};

export default Header;
