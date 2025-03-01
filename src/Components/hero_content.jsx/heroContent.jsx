import React from 'react'
import hero from '../../assets/astronot/hero.png'
import Content from './Content'
import Asto from './asto'


const HeroContent = () => {
    return (
        <div className="flex max-w-[1200px] mx-auto max-h-screen md:h-screen items-start md:items-center flex-col-reverse md:flex-row  ">

            <Content />
            <Asto></Asto>


        </div>

    )
}

export default HeroContent