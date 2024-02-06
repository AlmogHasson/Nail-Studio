import {
  motion,
  useMotionValueEvent,
  useScroll,
  stagger,
  useAnimate,
  easeInOut,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Parallax() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const staggerImgs = stagger(0.1, { startDelay: 0.25 });
  const [scope, divAnimate] = useAnimate();

  useEffect(() => {
    divAnimate(
      "div",
      scrolled
        ? { opacity: 0.5, scale: 0.3, filter: `blur(20px)` }
        : { opacity: 1, scale: 1, filter: "blur(0px)" },
      {
        duration: 0.4,
        delay: scrolled ? 0 : staggerImgs,
      }
    );
  }, [scrolled, staggerImgs]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.div
      ref={scope}
      style={{ position: "sticky", top: 0, height: "100vh" }}
    >
    {/* Staggered Elements */}
      
    {/* office image */}
      <motion.div
        initial={{ opacity:0, x:600}}
        animate={{ opacity:1, x:0 }}
        transition={{ease:'easeInOut', duration:0.3 }}
        className="absolute h-[60%] w-[66%] bg-white right-0 top-0 overflow-hidden"
          >
        <div
          id="1st"
          style={{
            backgroundImage: "url(./bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "0% 45%",
            height:"100%"
          }}
        />
      </motion.div>

      {/* hand holding bottle */}
      <motion.div
        initial={{ opacity: 0, x:-100}}
        animate={{ opacity: 1, x:0 }}
        transition={{ease:'easeInOut', duration: 0.3, delay: 0.3 }}
        className="absolute h-[30%] w-[25%] bottom-[25%] border-b-8 border-r-8 border-pink-200"
      >
        <div
          id="2nd"
          style={{
            backgroundImage: "url(./black_nails.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "0% 45%",
            height:'100%'
           }}
        />
      </motion.div>
      
      {/* pink color bottle */}
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute h-[28%] left-[70%] w-[10%] bottom-[17%] border-[8px] border-grey"
      >
        <div
          style={{
            backgroundImage: "url(./pink_ink.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height:'100%'
          }}
        />
      </motion.div>
      
      {/*central text box*/}
      {<motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="absolute border-[6px] bg-d-gray border-white border-current border-solid h-[40%] w-[30%] left-[20%] top-[15%] bottom-1/3 mobile:mobile"
        >
        <div style={{height:'100%'}}/>
      </motion.div>}

      <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="text-white absolute left-[15%] top-[18%] font-myFont text-8xl mobile:text-6xl">
        <h1 >Welcome to my</h1>
      </motion.div>

      { <motion.div
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="text-white absolute top-[30%] left-[21%] font-myFont text-8xl mobile:text-6xl mobile:top-[6%]">
        <h1>Nail Studio!</h1>
      </motion.div>}
    </motion.div>
  );
}
