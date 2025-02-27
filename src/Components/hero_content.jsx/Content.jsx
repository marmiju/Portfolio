import React from 'react'
import Social_media from '../Social_media/Social_media'

const Content = () => {
    return (
        <div className=" w-3/4 p-4 mx-auto flex flex-col justify-center items-center md:items-start mb-16">
            <h1 className='text-white text-3xl poppins font-bold md:text-6xl'>Hello I'm
            </h1>
            <span className='bg-gradient-to-r mar font-bold font_mar text-4xl md:text-8xl'>MAR miju</span>
            <p className='text-white text-sm'>Passionate about building innovative, high-performing applications using Flutter, MERN Stack, and AI technologies.</p>
            <Social_media></Social_media>
        </div>
    )
}

export default Content