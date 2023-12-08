import { motion ,useScroll, useTransform } from 'framer-motion';
import './parallax.css'
import { useRef } from 'react'

export default function Parallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress,[0,1],["0%","60%"]);
    const backgroundY_L1 = useTransform(scrollYProgress,[0,1],["0%","10%"]);
    const backgroundY_L2 = useTransform(scrollYProgress,[0,1],["0%","40%"]);
    const textY = useTransform(scrollYProgress,[0,1],["-20%","60%"])

  return (
    <div className='parallax-page-1' ref={ref}>
        <motion.h1 style={{y: textY}}>Welcome to my Nail Studio!</motion.h1>
        <motion.div className="bg w-full h-screen overflow-hidden relative grid place-items-center" style={{ y:backgroundY}}/>
        <motion.div className="layer-1" style={{y:backgroundY_L1}}/>
        <motion.div className="layer-2" style={{y:backgroundY_L2}}/>
    </div> 
  )
}
