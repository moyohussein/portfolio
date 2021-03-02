import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { 
  FiLinkedin,
  FiGithub,
  FiTwitter,
} 
from "react-icons/fi";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';

const icons = [
    {icon: <FiLinkedin style={{fontSize: 25, color: `var(--textNormal)`}}/>, title: "Linkedin", path:"https://twitter.com/moyohussein/"},
    {icon: <FiTwitter style={{fontSize: 25, color: `var(--textNormal)`}}/>, title: "Twitter", path:"https://www.linkedin.com/in/abdulqoharhussein/"}, 
    {icon: <FiGithub style={{fontSize: 25, color: `var(--textNormal)`}}/>, title: "GitHub", path:"https://github.com/moyohussein/"},
];
  
const listings = icons.map(icon => {
    return (
      <Tooltip 
        title={icon.title} 
        TransitionComponent={Zoom}
        placement="right"
      >
      <Button
        component="a"
        href={icon.path}
        rel="noopener" 
        target="_blank"
        variant="contained"
        elevation= {1}
        style={{
          backgroundColor: `transparent`,
          padding: 10,
          margin: 3,
          borderRadius: `50%`,
        }}
      >
        {icon.icon}
      </Button>
      </Tooltip>
    )
});
  

const SocialIcons = () => {
    return (  
        <ButtonGroup 
            orientation="vertical"  
            color="secondary"
            style={{ position: `fixed`, top: `35%`, left: `0.5%`}}
        >
            <Typography style={{ fontSize: 12, color: `var(--link-shadow)` }}>Follow me</Typography>
            {listings}
        </ButtonGroup>
    );
}
 
export default SocialIcons;