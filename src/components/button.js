import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { GoLinkExternal } from 'react-icons/go';
import HoverText from './hovertext'

const AwesomeButton = ({ webUrl }) => {
    return (  
                <ButtonBase style={{borderRadius: 5}}>
                    <a 
                        href={webUrl}
                        className="awesomeButton"
                        style={{fontFamily: `Alata`}}
                    >
                        <GoLinkExternal style=
                        {{
                            marginTop: 5, 
                            marginRight: 10
                        }} />
                        <strong>
                            visit website
                        </strong>
                    </a>
                </ButtonBase>

    );
};

const ContactButton = () => {
    return (  
                <ButtonBase style={{borderRadius: 5}}>
                <a
                    href="mailto:abdulqoharhussein@gmail.com" 
                    className="contactButton"
                >
                    <HoverText />
                </a>
                </ButtonBase>

    );
};
 
export  { AwesomeButton, ContactButton };