import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-lime-300 rounded-tr-3xl rounded-tl-3xl text-black'> 
    <h1 className='text-[3vw] tracking-tighter text-zinc-900'> Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell product, explain complex ideas, and hire great people.</h1>
   
    <div className='border-t-[1px] flex gap-5 pt-5 border-lime-500 w-full mt-20 text-zinc-900'> 
        <div className='w-1/2'>
          <h1 className='text-5xl'> Our approach:</h1>
        <button className='bg-zinc-900 text-white rounded-full px-8 py-3 flex items-center gap-10 mt-5'> READ MORE
            <div className='w-2 h-2 bg-white rounded-full'> </div>
        </button>
    
       </div>
       <div className='w-1/2 h-[70vh] rounded-3xl bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")]'> </div>
    </div>
    </div>

  )
}

export default About