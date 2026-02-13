"use client";

import { motion } from "framer-motion";

const skills = [
    "Customer Service",
    "Inbound Call Handling",
    "Verbal Communication",
    "Written Communication",
    "Complaint Handling",
    "Issue Resolution",
    "Attention to Detail",
    "Resilience",
    "Adaptability",
    "Multichannel Support",
    "CRM Navigation",
    "Data Entry"
];

export default function Skills() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 z-20 bg-[#121212]">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-12"
                >
                    Core Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                        >
                            <span className="text-gray-200 font-medium tracking-wide">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
