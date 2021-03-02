import React, { useState } from "react";
// import CardPop from "../components/cardpop";
import { Link } from "gatsby";
import SEO from "../components/seo";
// import AwesomeButton from "../components/button";
import Rest from "../data/rest";
import Typist from 'react-typist';
import Typography from "@material-ui/core/Typography";
import 'react-typist/dist/Typist.css';


// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import Button from "@material-ui/core/Button";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import {AnimateSharedLayout, motion} from 'framer-motion';

// import { motion, AnimateSharedLayout } from "framer-motion";

// // import "./styles.css";

// function Content({ day, disabled }) {
//   return (
//     <motion.h1
//       className="title"
//       layoutId="title"
//       style={{ opacity: disabled ? 0.2 : 1 }}
//     >
//       {day}
//     </motion.h1>
//   );
// }

// function ExpandedCard({ children, onCollapse }) {
//   return (
//     <>
//       <motion.div
//         className="card expanded"
//         layoutId="expandable-card"
//         onClick={onCollapse}
//       >
//         {children}
//       </motion.div>
//       <motion.p
//         className="card expanded secondary"
//         onClick={onCollapse}
//         transition={{ delay: 0.3 }}
//         initial={{ opacity: 0, top: "6rem" }}
//         animate={{ opacity: 1, top: "3rem" }}
//       >
//         Today is clear
//       </motion.p>
//     </>
//   );
// }

// function CompactCard({ children, onExpand, disabled }) {
//   return (
//     <motion.div
//       className="card compact"
//       layoutId="expandable-card"
//       onClick={disabled ? undefined : onExpand}
//     >
//       {children}
//     </motion.div>
//   );
// }

// function DateButton({ day, onCollapse, onExpand, disabled }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const collapseDate = () => {
//     setIsExpanded(false);
//     onCollapse();
//   };

//   const expandDate = () => {
//     setIsExpanded(true);
//     onExpand();
//   };

//   return (
//     <div className="card-container">
//       <AnimateSharedLayout>
//         {isExpanded ? (
//           <ExpandedCard onCollapse={collapseDate} day={day}>
//             <Content day={day} disabled={disabled} />
//           </ExpandedCard>
//         ) : (
//           <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
//             <Content day={day} disabled={disabled} />
//           </CompactCard>
//         )}
//       </AnimateSharedLayout>
//     </div>
//   );
// };



// const variants = {
//   enter: (direction) => {
//       return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0
//       }
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1
//   },
//   exit: (direction) => {
//       return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0
//       }
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const images = 
// [
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6nCVjA0S936UiBlDUsov4QHaE9%26pid%3DApi&f=1",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iJyZTWUQ41RGdoVYjU-ARAHaE7%26pid%3DApi&f=1",
//   "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.pLR2UXZIK-oWC76-XMX2iAHaEK%26pid%3DApi&f=1"
// ];



const CodeLab = () => {
 
  // const [expandedDay, setCollapsedDay] = useState();
  // const days = [25, 26, 27, 28, 29];

  // const [open,setOpen]=useState(false);

  // const [[page, direction], setPage] = useState([0, 0]);
  // const imageIndex = wrap(0, images.length, page);
  // const paginate = (newDirection) => {
  //   setPage([page + newDirection, newDirection]);
  // };

  // const onDragEnd = (e, { offset, velocity }) => {
  //   const swipe = swipePower(offset.x, velocity.x);
  //   return (
  //   swipe < -swipeConfidenceThreshold ? paginate(1) :
  //   swipe > swipeConfidenceThreshold ? paginate(-1) : null

  // )};

  // const [animate, cycleCard] = useCycle(
  //   {
  //     card: { padding: "1rem" },
  //     image: {
  //       width: "100%",
  //       marginLeft: "0rem",
  //       marginRight: "0rem",
  //       marginTop: "0rem"
  //     }
  //   },
  //   {
  //     card: { padding: "0rem" },
  //     image: {
  //       width: "125%",
  //       marginLeft: "-3rem",
  //       marginRight: "-3rem",
  //       marginTop: "-1rem"
  //     }
  //   }
  // );

  // const [animate, toggleFocus] = useCycle(
  //   {
  //     container: { height: "25rem", top: "0rem", overflowX: "auto" },
  //     title: { opacity: 1 }
  //   },
  //   {
  //     container: { height: "100%", top: "-4.4rem", overflowX: "hidden" },
  //     title: { opacity: 0 }
  //   }
  // );
 

  return (
  <>
    <SEO title="CodeLab" />
    {/* <AwesomeButton /> */}
    {/* <Typist className="typist" cursor={{ show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 1000}} >
          <Typography>I am a freelance front-end developer from Lagos, Nigeria.<br />
          I code efficient and beautiful user interfaces for small businesses and individuals - on time and on budget.<br />
          Feel free to take a look at my latest project on the <Link to="/portfolio">web portfolio page</Link>.<br />
          If you have any Questions or you want to hire me for a project. <a href='mailto:abdulqoharhussein@gmail.com'>Contact me</a> <br />
          I am also exploring new frontiers in devOps engineering to help solidify my knowledge of code integration and deployment.<br />
          Asides coding, I love research documentaries, cooking, dystopian movies and reading blog articles.</Typography>
    </Typist> */}

    {/* <Typist
              cursor=
              {{ 
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
              }}
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
            </Typist> */}
    
    <Rest />
    {/* <ThreeDButton /> */}
    {/* <CardPop /> */}
    {/* <AnimatePresence initial={false} custom={direction}>
        <div>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDragEnd}
        />
        </div>
        </AnimatePresence>
       
            <Button style=
            {{
                position: `absolute`, 
                left: 0, 
                bottom: `50%`, 
                borderRadius: `50%`}} 
                onClick={() => paginate(-1)}
            >
                <ArrowBackIosIcon />
            </Button>
            <Button style=
            {{
                position: `absolute`, 
                right: 0, 
                bottom: `50%`, 
                borderRadius: `50%`}} 
                onClick={() => paginate(1)}
            >
                <ArrowForwardIosIcon />
            </Button>     */}

{/* <AnimateSharedLayout>
  {open ?
    (
    <motion.div 
      onClick={()=> setOpen(false)} 
      className='expanded-card'
      layoutId="expandable-card"
      style={{background:value}}
    >
      <motion.h2         
        className='expanded-card-h'          
        layoutId="expandable-card-h"
      > 
        Expanded {value}
      </motion.h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate aliquam molestiae ratione sint magnam sequi fugiat ullam earum distinctio fuga iure, ad odit repudiandae modi est alias ipsum aperiam.Culpa?
      </p>
    </motion.div>
  )
  :
    (
    <motion.div 
      onClick={()=>setOpen(true)}            
      className="normal-card"            
      layoutId="expandable-card"            
      style={{background:value}}
    >
      <motion.h1 
        layoutId="expandable-card-h"
      >
        {value}
      </motion.h1>
    </motion.div>
  )} 
  </AnimateSharedLayout> */}
   {/* <motion.div
      className="card-wrapper"
      onTap={() => {
        cycleCard();
        // toggleFocus();
      }}
      animate={animate.card}
      initial={{ padding: "1rem" }}
      transition={{ ease: "easeOut", delay: 0.1 }}
    >
      <div className="card">
        <figure className="card-image-container">
          <div className="card-image-wrapper">
            <motion.img
              className="card-image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6nCVjA0S936UiBlDUsov4QHaE9%26pid%3DApi&f=1"
              alt=""
              animate={animate.image}
              initial={{
                marginLeft: "0rem",
                marginRight: "0rem",
                marginTop: "0rem"
              }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <figcaption>
            Photo by <b></b> on Unsplash
          </figcaption>
        </figure>
      </div>
    </motion.div> */}
    {/* <div className="container">
      <p>Click on a date to see the expanded view.</p>
      <div className="dates">
        {days.map(day => (
          <DateButton
            style={{
              display: `flex`,
              flexDirection: `column`,
            }}
            key={day}
            day={day}
            disabled={expandedDay !== day && expandedDay !== undefined}
            onExpand={() => setCollapsedDay(day)}
            onCollapse={() => setCollapsedDay()}
          />
        ))}
      </div>
    </div> */}
  </>
  )
};

export default CodeLab;
