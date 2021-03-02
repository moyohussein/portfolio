import React, { useState } from "react";
import { makeStyles, Card } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import CardActionArea from "@material-ui/core/CardActionArea";
import { motion } from "framer-motion";
import BackgroundImage from "gatsby-background-image";

const Circles = () => {
    return (
        <Box 
            display="flex" 
            alignItems="center" 
            position="absolute" 
            left={10} 
            top={0} 
            bottom={0}
        >
            {['red', `green`, `yellow`].map(color => (
                <FiberManualRecordSharpIcon style={{fontSize: 15, color: color}} />
            ))}
        </Box>
    )
};

const container = {
    enter: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
};
const item = {
    initial: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
    },
};

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: `10px 10px 3px #333333`,
        background: `white`,
        width: 385,
        position: `relative`,
        overflow: `hidden`,
    },
    cardHeader: {
        background: `var(--cards)`,
    },
    cardMedia: {
        position: `relative`,
        height: 250,
        backgroundRepeat: `none`,
        cursor: `pointer`,
    },
    overlayImage: {
        height: `200%`,
        overflow: `hidden`,
        bottom: `100%`,
        width: `100%`,
        filter: `brightness(40%)`,
    },
    overlayItems: {
        position: `absolute`,
        margin: `0 auto`,
        display: `flex`,
        flexWrap: `wrap`,
        marin: `auto`,
        overflow: `hidden`,
        top: `20%`,
        padding: `8%`,
        right: 0,
        left: 0,
        bottom: 0,
        width: `100%`,
        justifyContent: `center`,
        alignContent: `center`,
        '& > *': {
            margin: 5,
            zIndex: 0,
        },
        '& > :last-child': {
            flex: `1 0 100%`, 
            justifyItem: `center`,
            textAlign: `center`,
            paddingTop: 20,    
        },
    },
    ribbon: {
        position: `absolute`,
        zIndex: 3,
        transform: `rotate(45deg)`,
        top: 17.5,
        right: -45,
        width: 170,
        fontFamily: `Alata`,
        textTransform: `none`,
        background: `linear-gradient(to right, #2C5364, #203A43, #0F2027)`,
        color: `whitesmoke`,
        animation: `$slide 1100ms ${theme.transitions.easing.easeOut}`,
    },
    "@keyframes slide": {
        "0%": {
          right: -200,
        },
        "100%": {
          right: -45,
        },
    },
}));

const OverlayItems = ({ info }) => {
    const classes = useStyles();
    const addMore = [...info, 'more...'];
    return (
            <motion.ul variants={container} className={classes.overlayItems}>
                {addMore.map(bit => (
                    <motion.li variants={item}>
                        <Chip 
                            label={bit} 
                            style=
                            {{
                                cursor: `pointer`,
                                padding: 5,
                                backgroundColor: `var(--hr)`,
                                color: `var(--color)`,
                                fontFamily: `Alata`,
                                borderRadius: 0,
                            }}
                        />
                    </motion.li>
                ))}
            </motion.ul>
    )
};


const CardHeader = ({ title }) => {
    const classes = useStyles();
    return (
        <Box 
            display="flex" 
            p={1} 
            pt={0} 
            pb={0} 
            width="100%" 
            justifyContent="center" 
            alignContent="center"
            bgcolor="white"
            position="relative"
            zIndex={2}
            className={classes.cardHeader}
        >
            <Circles />
            <Typography 
                variant="caption" 
                style=
                {{
                    lineHeight: 2, 
                    fontFamily: `Alata`, 
                    textTransform: `uppercase`,
                    color: `var(--color)`,
                }}
            >
                {title}
            </Typography>
        </Box>
    )
};

const CardItem = ({ title, info, images1, images2, repo, onHandleClick }) => {
    const classes = useStyles();
    const [isHovered, setHovered] = useState(false);
    const hoverEnter = () => {
        setHovered(true)
    };
    const hoverLeave = () => {
        setHovered(false)
    };
    const HoverItems = ({ info }) => (
        isHovered && <OverlayItems info={info} />
    );
    
    return (
            <Card className={classes.root}>
                <Button
                    className={classes.ribbon}
                    color="default"
                    variant="text"
                    href={repo}
                >
                    GitHub Repo
                </Button>
                <CardActionArea 
                    onClick={onHandleClick} 
                    onMouseEnter={hoverEnter}
                    onMouseLeave={hoverLeave}
                >
                    <div 
                        role="button" 
                        aria-hidden="true"  
                        onClick={hoverLeave}
                    >
                        <CardHeader 
                            title={title}
                        />
                        <BackgroundImage 
                            fluid={images1} 
                            backgroundColor={`true`}
                            className={classes.cardMedia}
                        >
                            <div style=
                            {{
                                height: isHovered ? `100%` : 0, 
                                transition: `all 0.1s ease`}}
                            >
                                <BackgroundImage 
                                    fluid={isHovered && images2} 
                                    className={classes.overlayImage}
                                >
                                </BackgroundImage>
                                <HoverItems 
                                    info={info}
                                />
                            </div>
                        </BackgroundImage>
                    </div>
                </CardActionArea>
            </Card>
    )
};

export { CardItem, Circles};