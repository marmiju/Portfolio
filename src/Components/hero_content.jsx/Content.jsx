import React from 'react'
import Social_media from '../Social_media/Social_media'

const Content = () => {
    return (
        <div className=" w-3/4 p-4 mx-auto flex flex-col justify-center items-start md:mt-60 md:items-start  ">
            <h1 className=' text-xl md:text-3xl poppins text-[#737171] font-thin'>Hello I'm
            </h1>
            <span className='text-3xl md:text-6xl font_mar font-bold'>Azizar Rahman</span>
            <p className=' text-xl md:text-3xl poppins text-[#737171] font-semibold'>Software Engineer</p>
            <Social_media></Social_media>
        </div>
    )
}

export default Content