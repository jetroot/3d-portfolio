import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full purple-red-gradient">
            <motion.div className="w-full p-1 rounded-[20px] shadow-md">
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-2 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        index={index}
                        key={service.title}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
