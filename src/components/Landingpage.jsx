import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() {

  return (
  <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     <div id="textstructure" className='mt-52 px-20 '>
        {["WE CREATE", "EYE OPENING", "PRESENTATION"] .map((item, index)=>{
              return(
            <div id="masker">
            <div className='w-fit flex '>
               {index === 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1.5}} className='w-[8vw] h-[4vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center relative rounded-md mr-[.5vw] top-[.8vw]'></motion.div>)}
            <h1 className='text-[5.5vw] tracking-tighter leading-[5vw] '> {item}</h1>
            </div>
        </div>
        )})}
     </div>
     <div className='border-t-[1px] mt-28 border-zinc-700 flex justify-between items-center px-20 py-3'>
        {["For public and private companies","For public and private companies"] .map((item, index)=>(<p className='font-light text-sm tracking-tight leading-none'>{item}</p>))}
        <div id='start' className='flex items-center gap-1'>
            <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full text-xs'> START THE PROJECT</div>
            <div className='w-8 h-8 rounded-full flex justify-center items-center border-[1px] border-zinc-500'>
               <span className='rotate-[45deg]'> <i className="fa-solid fa-arrow-up text-white"></i>  </span>
            </div>
        </div>
     </div>

  </div>
  )
}

export default Landingpage