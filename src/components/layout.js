import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import NavBar from "./navbar";
import "./layout.css";
import { motion, AnimatePresence } from 'framer-motion';
import BackGround from "./background"
import Footer from "./footer";
import ThemeSwitch from "./switch";
import SocialIcons from "./socialicons";

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
};


const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <BackGround />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <SocialIcons />
      <NavBar />
      <ThemeSwitch />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `85%`,
          padding: `45px 10px`,
          position: 'relative',
          minHeight: `calc(100vh - 170px)`,
          overflow: `auto`,
          display: `flex`,
          justifyContent: `center`,
          alignContent: `center`,
        }}
      >
        <AnimatePresence>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          key={location.pathname}
          location={location}
        >
          {children}
        </motion.main>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
