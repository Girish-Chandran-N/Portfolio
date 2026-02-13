"use client";

import { motion } from "framer-motion";

const educationData = [
    {
        degree: "MSc International Accounting and Finance",
        institution: "Bournemouth University",
        year: "2024" // Inferring year based on timeline or leaving generic if unknown. User didn't specify.
    },
    {
        degree: "Master of Business Administration (MBA)",
        institution: "College of Engineering Trivandrum",
        year: ""
    },
    {
        degree: "Bachelor of Business Administration (BBA)",
        institution: "University of Kerala",
        year: ""
    }
];

export default function Education() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 z-20 bg-[#121212]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-12 text-center"
                >
                    Education
                </motion.h2>

                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-white/10 hover:bg-white/5 transition-colors rounded-lg"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                <p className="text-gray-400 mt-1">{edu.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
