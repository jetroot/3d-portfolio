import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {RocketCanvas}  from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = () => {};

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Do form logic here
    };

    return (
        <div className="flex max-md:flex-col max-w-7xl">
            <motion.div className="relative mt-12 bg-transparent w-full p-8 rounded-2xl">
                <div className="w-full h-full absolute inset-0 z-[-1]">
                    <RocketCanvas />
                </div>
                <p className={styles.sectionSubText}>Get in touch.</p>
                <h2 className={styles.sectionHeadText}>Contact</h2>

                <form
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-wrap w-full gap-8"
                >
                    <label className="flex flex-col w-full">
                        <span className="text-white mb-4 font-medium">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none border-none"
                        />
                    </label>

                    <label className="flex flex-col w-full">
                        <span className="text-white mb-4 font-medium">
                            Your Email
                        </span>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Type your email"
                            className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none border-none"
                        />
                    </label>

                    <label className="flex flex-col w-full">
                        <span className="text-white mb-4 font-medium">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            type="text"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className="bg-transparent py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none border-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="font-bold shadow-md rounded-xl shadow-primary bg-tertiary py-3 px-8 outline-none text-white cursor-pointer"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
