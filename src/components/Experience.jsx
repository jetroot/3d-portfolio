import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ index, experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: index % 3 === 0 ? "#e5579d" : "#f19858",
                color: "#fff",
            }}
            contentArrowStyle={{
                borderRight: `7px solid #f1f1f1`,
            }}
            date={experience.date}
            iconStyle={{
                background: experience.iconBg,
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        className="w-[60%] h-[60%] object-contain"
                        alt=""
                    />
                </div>
            }
        >
            <div>
                <h1 className="font-bold text-lg uppercase">
                    {experience.title}
                </h1>
                <h3 className="text-slate-700 text-[16px] font-semibold">
                    {" "}
                    {experience.date}
                </h3>
                {/* <p
                    className="text-slate-700 text-[16px] font-semibold"
                    style={{ marginTop: 0 }}
                >
                    {experience.company_name}
                </p> */}

                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                            key={`exp-point-${index}`}
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div className="mt-12">
                <p className={styles.sectionSubText}>
                    What I have done so far.
                </p>
                <h2 className={styles.sectionHeadText}>Work Experience</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor={''}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            index={index}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
