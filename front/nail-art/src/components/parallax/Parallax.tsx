import { motion, spring, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";


export default function Parallax() {

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest)=> {
    const previous = scrollY.getPrevious();
    if(latest > previous){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  });
  

  return (
    <div className="relative text-white h-[100vh] img">
      <div className="transparency">
      <motion.div
        variants={{
          preScroll: { opacity: 1, translateX: "0%"},
          postScroll:{ opacity: 0, translateX: "0%"}
        }}
        initial={{ opacity: 0, translateX: "-10%", translateY: 300 }}
        animate={scrolled? "postScroll" : "preScroll"}
        transition={scrolled?{ duration: 0.7}:{duration: 0.5}}    
        style={{position:'sticky', top:0}}    
        >
        <h1>Welcome to my Nail Studio!</h1>
      </motion.div>
    </div>
  </div>
  );
}

