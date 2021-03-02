import React from "react";
import Box from '@material-ui/core/Box';
import { Link } from 'gatsby';
import SEO from "../components/seo";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


const About = () => {
  
  return (
  <>
    <SEO title="About" />
    <Box 
    p={6}
    textAlign="center"
    >
     <Typist
              cursor=
              {{ 
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
              }}
              startDelay={1000}
              avgTypingDelay={40}
            >
              I am a freelance front-end developer from Lagos, Nigeria.
              <Typist.Delay ms={1250} />
              <br />
              I code efficient and beautiful user interfaces for small businesses and individuals - on time and on budget.
              <Typist.Delay ms={1250} />
              <br />
              Feel free to take a look at my latest project on the <Link to="/portfolio">web portfolio page</Link>
              <br />
              <Typist.Delay ms={1250} />
              If you have any Questions or you want to hire me for a project. <a href='mailto:abdulqoharhussein@gmail.com'>Contact me</a>
              <br />
              <Typist.Delay ms={1250} />
              I am also exploring new frontiers in devOps engineering.
              <br />
              <Typist.Delay ms={1250} />
              Asides coding, I love research documentaries, cooking, dystopian movies and reading blog articles.
            </Typist>
    </Box>
  </>
  )  
};

export default About;