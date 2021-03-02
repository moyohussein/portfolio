import React from "react";
import SEO from "../components/seo";
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { ContactButton } from "../components/button";


const IndexPage = () => {
 
  return (
    <>
    <SEO title="Home" />
    <Box
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
    >
      <Box textAlign="justify">
        <h1>
            <Typist
              cursor={{ hideWhenDone: true }}
              startDelay={1000}
            >
              I'm <Typist.Delay ms={250} />
              Hussein AbdulQohar 🇳🇬
              <Typist.Backspace count={23} delay={1000} />
              a Microbiologist 🔬
              <Typist.Backspace count={19} delay={1000} />
              a Front-end Developer 👨🏿‍💻
            </Typist>
        </h1>
      </Box>
      <Typography paragraph>
        I write clean codes and bring alive beautiful user interfaces.
      </Typography> 
      <Box mt={5}>
        <ContactButton /> 
      </Box>
    </Box>  
  </>
  )
}

export default IndexPage