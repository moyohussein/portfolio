import React, { useState } from "react";
import { motion } from "framer-motion";


const topTitleVariant = {
    notHovered: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      },
    },
    hovered: {
      transition: {
        staggerChildren: 0.07
      },
    },
};
  
const topSpanVariant = {
    notHovered: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hovered: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
};
  
const bottomTitleVariant = {
    notHovered: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      }
    },
    hovered: {
      transition: {
        staggerChildren: 0.08,
      },
    },
};
  
  const bottomSpanVariant = {
    notHovered: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hovered: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
const HoverText = () => {
    const [titleHovered, setTitleHovered] = useState(false);
    const handleTitleHover = () => {
        setTitleHovered( prevState => !prevState )
    };

    return (  
        <>
            <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                onMouseEnter={handleTitleHover}
                onMouseLeave={handleTitleHover}
                className="title-container"
            >
                <motion.h6
                    initial="notHovered"
                    animate={titleHovered ? "hovered" : "notHovered"}
                    variants={topTitleVariant}
                    className="shown"
                >
                  {['H', 'i', 'r', 'e', ' ', 'm', 'e'].map(letter => {
                    return (
                    <motion.span variants={topSpanVariant}>{letter}</motion.span>
                    )
                  })}
                </motion.h6>
                <motion.h6
                    initial="notHovered"
                    animate={titleHovered ? "hovered" : "notHovered"}
                    variants={bottomTitleVariant}
                    className="shown"
                >
                  {['L', 'e', 't', "'", 's ', '', 'T', 'a', 'l', 'k'].map(letter => {
                    return (
                    <motion.span variants={bottomSpanVariant}>{letter}</motion.span>
                    )
                  })}
                </motion.h6>
                <h6 className="hidden">
                  {['H', 'i', 'r', 'e', ' ', 'm', 'e'].map(letter => {
                    return (
                    <span>{letter}</span>
                    )
                  })}
                </h6>
            </motion.div>
        </>
    );
}
 
export default HoverText;