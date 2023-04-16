import React from "react";
import { motion } from "framer-motion";
import { ComputerCanvas } from "./canvas/Computers";
import heart from '../assets/heart.svg'

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className="max-w-7xl mx-auto w-full">
                <div className="top-48 text-6xl flex items-center relative max-lg:flex-col">
                    {/* <div className="w-6 h-6 bg-[#845ade] rounded-full mr-4 flex justify-center">
                        <div className="violet-gradient w-1 h-48 rounded-full"></div>
                    </div> */}

                    <div className="mx-2">
                        <span className="text-white font-bold">Hi, I'm </span>
                        <span className="text-red-500 font-semibold ml-2">
                            Ark
                        </span>

                        <p className="text-xl text-gray-300 mt-4 flex items-center">
                            I develop IT applications using modern technologies
                            from{" "}
                            <span className="w-8 h-8 ml-4">
                                <img src={heart} alt="heart" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <ComputerCanvas />
            <div className="absolute bottom-2 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#a100e9] flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full mb-1 bg-secondary"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};



export default Hero;
