import React from "react";
import Typography from "@material-ui/core/Typography";  
import Link from "@material-ui/core/Link";

const Footer = () => {

    return (  
    <footer>
        <div
        style={{
            width: `100%`,
            position: `fixed`,
            bottom: 0,
            zIndex: 10,
        }}
        >
            <Typography 
            style=
            {{
                fontFamily: `monospace`,
                fontSize: 12,
                width: `100%`,
                margin: `0 auto`,
                textAlign: `center`,
                color: `black`,
                background: `white`,
                padding: 2.5,
            }}>
                Handcrafted by me © {new Date().getFullYear()} -
                Built with <Link href="https://www.gatsbyjs.com">Gatsby</Link>
            </Typography>
        </div>
    </footer>
    );
};
 
export default Footer;