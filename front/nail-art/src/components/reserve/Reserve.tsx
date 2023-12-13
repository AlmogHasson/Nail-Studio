import { motion } from "framer-motion";

const Reserve = () => {
    
  return (
    <div >
        <motion.div className="h-[100vh] bg-black text-white overflow-hidden flex"
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity: 1, translateX: '55%'}}
          transition={{duration:1}} 
        >
          Reserve
        </motion.div>
    </div>
 
  )
}

export default Reserve