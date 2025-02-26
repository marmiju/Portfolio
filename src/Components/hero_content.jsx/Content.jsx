import React from 'react'
import Social_media from '../Social_media/Social_media'

const Content = () => {
    return (
        <div className=" w-3/4 p-4 mx-auto flex flex-col justify-center items-center md:items-start mb-16">
            <h1 className='text-white text-3xl poppins font-bold md:text-6xl'>Hello I'm
            </h1>
            <span className='bg-gradient-to-r mar font-bold font_mar text-4xl md:text-8xl'>MAR miju</span>
            <p className='text-white text-sm'>Software Developer at Innovate Digital, specializing in Flutter, React, Java, and more. Currently exploring the world of Artificial Intelligence, driven by my passion for continuous learning and skill development. My goal is to work on groundbreaking projects, solve complex problems, and make a meaningful impact. In the long run, I aspire to become a Software Developer with a strong focus on AI-driven solutions</p>
            <Social_media></Social_media>
        </div>
    )
}

export default Content