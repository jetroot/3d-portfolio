import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-slate-700 p-5 rounded-2xl sm:w-[350px] w-full"
            >
                <div className="w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-4">
                        <div
                            onClick={() =>
                                window.open(source_code_link, "_blank")
                            }
                            className="w-10 h-10 rounded-full bg-black-100 cursor-pointer flex justify-center items-center"
                        >
                            <img
                                src={github}
                                alt=""
                                className="w-6 h-6 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-lg">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>

                <div className="mt-5 flex flex-wrap">
                    {tags.map((tag) => (
                        <p
                            key={tag.name}
                            className={`text-[14px] ${tag.color} mr-2`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div className="mt-12">
                <p className={styles.sectionSubText}>My Work.</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl">
                    Hey there! I'm working on an exciting project and wanted to
                    share some of the technologies I'm using. I'm utilizing
                    ReactJS and NextJS for frontend development, SpringBoot &
                    NodeJS for backend development, and Docker for
                    containerization. I'm also using Tailwindcss for
                    styling, as well as many other cutting-edge modern
                    technologies.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "project");
