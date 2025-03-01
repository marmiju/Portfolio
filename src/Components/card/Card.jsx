import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="text-center gap-2 border border-[#ffffff3b] rounded-full bg-clip grid grid-cols-1 items-center bg-transparent backdrop-blur-3xl justify-center overflow-hidden">
            <img src={data.img} alt={data.name} className=" h-16 p-4 animate-pulse  mx-auto" />
            {/* <p className='bg-gradient-to-bl from-cyan-900 to-purple-900 rounded-l-sm rounded-r-sm px-4 py-1'>{data.name}</p> */}
        </div>
    )
}

export default Card