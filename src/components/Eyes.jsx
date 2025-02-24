import React, { useEffect, useRef, useState } from 'react';


function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let deltaX = mouseX - window.innerWidth/2;
    let deltaY = mouseY - window.innerHeight/2;

    var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
   setRotate(angle-180);

    })
  })
  return (
    <div className='w-full h-screen overflow-hidden'>
         <div data-scroll data-scroll-section data-scroll-speed="-.2" className='relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
           <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10'> 
                 <div id='1st eye' className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                   <div  className='w-2/3 h-2/3 rounded-full  bg-zinc-900 relative text-center flex items-center justify-center text-xl text-zinc-100'>PLAY
                       <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                       <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                      </div>
                   </div>
                 </div>
                 <div id='2nd eye' className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full  bg-zinc-100'>
                   <div className='w-2/3 h-2/3 relative rounded-full flex items-center justify-center text-xl text-zinc-100 bg-zinc-900'>PLAY
                       <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                         <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                      </div>
                   </div>
                </div>

           </div> 
         </div>

    </div>
  )
}

export default Eyes