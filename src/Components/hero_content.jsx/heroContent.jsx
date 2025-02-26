import React from 'react'
import hero from '../../assets/astronot/hero.png'
import Content from './Content'
import Asto from './asto'


const HeroContent = () => {
    return (
        <div className="flex max-w-[1200px] mx-auto h-screen flex-col-reverse md:flex-row justify-end items-end ">
            <Content />
            <Asto></Asto>


        </div>

    )
}

export default HeroContent