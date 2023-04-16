import { motion } from "framer-motion";

import { styles } from "../styles";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                initial='hidden'
                whileInView={'show'}
                viewport={{once:true, amount:0.25}}
                className={`${styles.paddingX} max-w-7xl mx-auto`}
            >
                <span id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
