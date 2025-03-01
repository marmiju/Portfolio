import React from "react";
import Hero from "../Components/Home_hero/Hero";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/expreience";

const Home = () => {
    return (
        <div className=" w-full">
            <Hero />
            <Skills />
            <Experience></Experience>
        </div >
    );
};

export default Home;
