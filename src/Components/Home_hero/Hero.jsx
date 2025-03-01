import React from 'react';
import bgimage from '../../assets/bg/hero_bg.png';

import Header from '../Header/Header';
import HeroContent from '../hero_content.jsx/heroContent';

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center"
        // style={{ backgroundImage: `url(${bgimage})` }}
        >
            <Header />
            <HeroContent></HeroContent>

        </div>
    );
};

export default Hero;
