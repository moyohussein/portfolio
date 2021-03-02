import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import SEO from "../components/seo";
import { makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import CardPop from "../components/cardpop";
import Typography from "@material-ui/core/Typography";
import Popover from '@material-ui/core/Popover';
import { AwesomeButton } from "../components/button";
import Grow from '@material-ui/core/Grow';
import { 
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiReact,
  DiSass,
  DiWordpress,
} 
from "react-icons/di";
import { 
  SiMaterialUi, 
  SiGatsby,
  SiNextDotJs,
  SiGraphql
} from "react-icons/si";
import { CardItem } from "../components/card";
import { withStyles } from "@material-ui/core/styles";
import { useStaticQuery, graphql } from "gatsby";

const skills = 
[
    {label: 'Html5', icon: <DiHtml5 />}, 
    {label: 'Css3', icon: <DiCss3 />}, 
    {label: 'Vanilla JS', icon: <DiJsBadge />}, 
    {label: 'Git', icon: <DiGit />}, 
    {label: 'Github', icon: <DiGithubBadge />}, 
    {label: 'Material UI', icon: <SiMaterialUi />}, 
    {label: 'React JS', icon: <DiReact />}, 
    {label: 'Sass', icon: <DiSass />}, 
    {label: 'Gatsby JS', icon: <SiGatsby />}, 
    {label: 'Bootstrap', icon: <DiBootstrap />}, 
    {label: 'WordPress', icon: <DiWordpress />},
    {label: 'Next JS', icon: <SiNextDotJs />},
    {label: 'GraphQL', icon: <SiGraphql />}
];

const ChipSet = (skills.sort(() => Math.random() - 0.5)).map(skill => (
    <Chip label={skill.label} icon={skill.icon} style={{ padding: 5, margin: 7, backgroundColor: `var(--hr)`, color: `var(--color)`, fontFamily: `Alata` }} />
));


const PopoverPosition = withStyles({
  root: {
    backgroundColor: `rgba(0, 0, 0, 0.35)`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
   
  },
  paper: {
    width: `50vw`,
    height: `auto`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignContent: `center`,
    backgroundColor: `transparent`,
  },
})(Popover);


const useStyles = makeStyles({
    root: {
        display: `flex`,
        justifyContent: `center`,
        flexWrap: `wrap`,
        width: `100%`,
        margin: `20px 0 50px 0`,
    },
    list: {
        position: `relative`,
        margin: 20,
    },
    typo: {
      fontFamily: `Alata`,
    },
});

const Portfolio = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

const data = useStaticQuery(graphql`
  query {
    allProjectJson {
      edges {
        node {
          id
          title
          repo
          info
          webUrl
          images {
            childImageSharp {
              fluid {
                 ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
)

const projects = data.allProjectJson.edges;
console.log(projects)

  const mapItems = projects.map(({node: project}) => {
        const key = project.id
        const title = project.title
        const info = project.info
        const webUrl = project.webUrl
        const repo = project.repo
        const images1 = project.images[0].childImageSharp.fluid
        const images2 = project.images[1].childImageSharp.fluid
        const images3 = project.images[2].childImageSharp.fluid
        
    return (
          <li
            key={key}
            className={classes.list}
          >
                <div>
                      <CardItem 
                        key={key}
                        title={title}
                        info={info}
                        repo={repo}
                        images1={images1}
                        images2={images2}
                        onHandleClick={handleClick}
                      />
                      <PopoverPosition
                        id={id + key}
                        open={open}
                        anchorEl={anchorEl}
                        TransitionComponent={Grow}
                        transitionDuration="auto"
                        onClose={handleClose}
                        transformOrigin={{
                          vertical: 250,
                          horizontal: 'center',
                        }}
                        anchorReference="none"
                      >
                        <CardPop 
                          handleClose={handleClose}
                          images1={images1}
                          images2={images2}
                          images3={images3}
                          title={title}
                        />
                        <Box 
                          p={2.5} 
                          width="100%" 
                          display="flex" 
                          justifyContent="center"
                        >
                          <AwesomeButton webUrl={webUrl} />
                        </Box>
                      </PopoverPosition>
                </div>
          </li>
    )
});

  return (
  <>
    <SEO title="Portfolio" />
    <Box 
        display='flex' 
        justifyContent='center' 
        maxWidth="65%" 
        flexWrap="wrap" 
        m="0 auto"
    >
        {ChipSet}
    </Box>
    <ul className={classes.root}>
      {mapItems}
    </ul>
    <Box 
        m="0 auto" 
        p={1} 
        textAlign="center"
    >
      <Typography className={classes.typo}>Let's Talk</Typography>
      <Typography className={classes.typo}>Wanna get in touch or talk about a project</Typography>
      <Typography className={classes.typo}>Feel free to email me via <Link style={{fontFamily: `Alata`}} href="mailto:abdulqoharhussein@gmail.com">abdulqoharhussein@gmail.com</Link></Typography>
    </Box>
    
  </>
  )
};

export default Portfolio;
