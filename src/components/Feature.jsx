import { motion, useAnimation} from 'framer-motion'
import {Power4} from "gsap/all";
import React,{useState} from 'react';

function Feature() {
    const cards = [useAnimation(), useAnimation(),useAnimation(), useAnimation()];

    const handleHover = (index)=>{
        cards[index].start({y:"0"})

    };
    const handleHoverEnd = (index)=>{
        cards[index].start({y:"100%"});

    };

    
  return (
    <div data-scroll data-scroll-section className='relative w-full py-20 '>
        <div className='w-full px-10 border-b-[1px] pb-20 border-zinc-600'>
            <h1 className='text-6xl font-light tracking-tight'>Featured projects </h1>
        </div>

        <div className='px-20'>

            <div className='cards w-full flex gap-5 mt-10'>
                <motion.div 
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                 className='cardcontainer relative w-1/2 h-[75vh]'>

                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute font-bold flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter  text-lime-300'>
                        {"PREMIUM".split("").map((item,index) =>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={cards[0]} 
                            transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
                            className='inline-block'
                            key={index}>
                            {item}</motion.span>
                        ) )}
                    </h1>
                    <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png'></img>
                    </div>
                    <div className='flex gap-3'>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> BRANDED TEMPLATES </button>
                     </div>
                </motion.div>

                <motion.div
                 onHoverStart={() => handleHover(1)} 
                 onHoverEnd={() => handleHoverEnd(1)}
                 className='cardcontainer relative w-1/2 h-[75vh]'>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute font-bold right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter  text-lime-300'>
                    {"AH2".split("").map((item,index) =>(
                            <motion.span
                            initial={{y:"100%"}} 
                            animate={cards[1]} 
                            transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
                            className='inline-block'
                            key={index}>
                            {item}
                            </motion.span>
                        ) )}
                    </h1>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png'></img>
                    </div>
                    <div className='flex gap-3'>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> PITCH DECK </button>
                     </div>
                </motion.div>
            </div>

            <div className='cards w-full flex gap-5 mt-28'>
                <motion.div 
                onHoverStart={() => handleHover(2)}
                onHoverEnd={() => handleHoverEnd(2)}
                className='cardcontainer relative w-1/2 h-[75vh]'>
                
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                <h1 className='absolute font-bold left-full -translate-x-1/2 flex overflow-hidden top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter  text-lime-300'>
                        {"FYDE".split("").map((item,index) =>(
                            <motion.span 
                            initial={{y:"100%"}} 
                            animate={cards[2]} 
                            transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
                            className='inline-block'
                            key={index}>
                            {item}</motion.span>                        ) )}
                    </h1>
                    <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'></img>
                    </div>
                    <div className='flex gap-3'>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> AUDIT </button>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> COPYWRITTING  </button>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> SALES DECK </button>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> SLIDES DESIGN </button>
                     </div>
                </motion.div>

                <motion.div 
                onHoverStart={() => handleHover(3)}
                onHoverEnd={() => handleHoverEnd(3)}
                className='cardcontainer relative w-1/2 h-[75vh]'>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute font-bold right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-8xl tracking-tighter  text-lime-300'>
                        {"TRAWA".split("").map((item,index) =>(
                            <motion.span
                            initial={{y:"100%"}} 
                            animate={cards[3]} 
                            transition={{ease:[0.22, 1, 0.36, 1], delay: index*.05}}
                            className='inline-block'
                            key={index}>
                            {item}
                            </motion.span>
                        ) )}
                    </h1>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg'></img>
                    </div>
                     <div className='flex gap-3'>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> BRAND IDENTITY </button>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> DESIGN RESEARCH </button>
                         <button className='rounded-full border border-zinc-100 px-4 py-1 text-xs mt-3'> INVESTOR DECK </button>
                     </div>
                </motion.div>
            </div>

        </div>
    </div>
  )
}

export default Feature