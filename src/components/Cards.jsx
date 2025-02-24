import React from 'react'

function Cards() {
  return (
    <div className='w-full  h-screen flex items-center px-28 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card relative w-full h-full rounded-xl bg-teal-900 flex items-center justify-center">
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
                <button className='rounded-full border text-lime-300 border-lime-300 absolute px-4 py-1 text-xs left-5 bottom-5'>&copy; 2019-2022 </button>
            </div>
        </div>
        <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
            <div className="relative card w-1/2 h-full rounded-xl bg-zinc-800 flex items-center justify-center">
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
                <button className='rounded-full border text-lime-300 border-lime-300 absolute px-4 py-1 text-xs left-5 bottom-5'>RATING 5.0 ON CLUTCH</button>

            </div>
            <div className="relative card w-1/2 h-full rounded-xl bg-zinc-800 flex items-center justify-center">
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                <button className='rounded-full border text-lime-300 border-lime-300 absolute px-4 py-1 text-xs left-5 bottom-5'>BUSINESS BOOTCAPT ALUMNI </button>

            </div>

        </div>
    </div>
  )
}

export default Cards