import React, { useEffect, useState } from "react";
import Card from "../card/card";
import bgimage from "../../assets//bg/hero_bg.png"

const Skills = () => {
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        fetch("skills.json")
            .then((response) => response.json())
            .then((data) => {
                setSkills(data[0]);
            });
    }, []);

    // style={{ backgroundImage: `url(${bgimage})` }}
    return (
        <div className=" w-full pt-10 justify-center object-cover">
            <div className="flex justify-center"> <h1 className="font_mar mar text-6xl">MY SKILLS</h1></div>
            {skills ? (
                <div className="grid max-w-[1200px] mx-auto gap-y-2.5 justify-center text-center  text-[#cde8ff]">

                    <h2 className="text-sm mt-4">Programming Languages: </h2>
                    <div className="gap-4  grid sm:grid-cols-3 md:grid-cols-6 max-w-[600px] justify-center items-center" style={{}}>
                        {skills.programming_languages.map((lang, index) => {
                            return <Card key={index} data={lang} />
                        })}
                    </div>

                    <h2 className="text-sm poppins  mt-4">Frontend Development</h2>
                    <div className="gap-4 flex  justify-center items-center">
                        {skills.web_development.frontend.map((tech, index) => {
                            return <Card key={index} data={tech} />
                        }
                        )}
                    </div>

                    <h2 className="text-xl  mt-4">Backend Development</h2>
                    <div className="gap-4 flex justify-center items-center">
                        {skills.web_development.backend.map((tech, index) => {
                            return <Card key={index} data={tech} />
                        }
                        )}
                    </div>
                    <h2 className="text-xl   mt-4">Android applications</h2>
                    <div className="gap-4 flex justify-center items-center">
                        {skills.mobile_development.android.map((tech, index) => {
                            return <Card key={index} data={tech} />
                        }
                        )}
                    </div>
                    <h2 className="text-xl semibold mt-4">Cross Platform</h2>
                    <div className=" flex justify-center items-center">
                        {skills.mobile_development.cross_platform.map((tech, index) => {
                            return <Card key={index} data={tech} />
                        }
                        )}
                    </div>
                    <h2 className="text-xl font-bold semibold mt-4">Cross Platform</h2>
                    <div className="gap-4 flex justify-center items-center">
                        {skills.data_science_ai_ml.map((tech, index) => {
                            return <Card key={index} data={tech} />
                        }
                        )}
                    </div>



                </div>
            ) : (
                <p>Loading skills...</p>
            )}
        </div>
    );
};

export default Skills;
