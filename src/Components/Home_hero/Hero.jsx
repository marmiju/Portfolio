import React from 'react'
import bgVideo from "../../assets/videos/bg.mp4";

import Social_media from '../Social_media/Social_media';


const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Video Background */}
            <video autoPlay loop muted className="absolute w-full h-full object-cover"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-blend-overlay flex flex-col items-center justify-center text-center">
                <div className="flex-col justify-start text-white gap-1.5 ">
                    <h1 className='sm:text-3xl lg:text-6xl poppins'>Hello! <span className="font-bold">I'm </span></h1>
                    <h1 className="mar font_mar poppins relative text-7xl sm:text-8xl lg:text-9xl">
                        MAR miju
                    </h1>
                    <p className='text-xl  mb-5 poppins'>Passionate Software Engineer</p>
                    {/* Social Media */}
                    <Social_media></Social_media>

                </div>
            </div>


        </div>


    )
}

export default Hero