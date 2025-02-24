import { motion } from 'framer-motion'
import React from 'react'


function Marqee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-teal-900 text-zinc-100'>
    <div className="border-t-2 border-b-2 border-zinc-400 flex gap-10 whitespace-nowrap overflow-hidden">
  {[...Array(2)].map((_, index) => (
    <motion.h1
     will-change : transform
      key={index}
      initial={{ x: "0" }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
      className="text-[15vw] font-semibold tracking-tighter pr-10"
    >
      WE ARE OCHI
    </motion.h1>
   ))}
</div>

</div>
  )
}

export default Marqee