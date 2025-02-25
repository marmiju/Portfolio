import React from 'react';
import bgimage from '../../assets/bg/hero_bg.png';

import Header from '../Header/Header';

const Hero = () => {
    return (
        <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <Header />

        </div>
    );
};

export default Hero;
