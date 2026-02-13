"use client";

import { motion } from "framer-motion";

const experienceData = [
    {
        id: 1,
        role: "Customer Experience Associate",
        company: "Lidl UK, Eastbourne",
        period: "2024 – Present",
        description: "Driving brand loyalty through exceptional service. Managed high-volume customer interactions and resolved complex issues, directly contributing to store retention targets.",
    },
    {
        id: 2,
        role: "E-commerce Support Executive",
        company: "Wearo.in (Remote)",
        period: "Jan 2024 – Present",
        description: "Managing digital customer touchpoints and communication channels. Analyzing customer queries to improve FAQ content and support operational efficiency.",
    },
    {
        id: 3,
        role: "Digital Marketing Executive",
        company: "Markstone Fashions",
        period: "Apr 2022 – Jan 2024",
        description: "Optimized product listings for e-commerce performance. Managed customer data and responding to inquiries to drive sales and product engagement.",
    }
];

export default function Experience() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 z-20 bg-[#0B0F17]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2B7FFF]/30 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    Professional Experience
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experienceData.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: job.id * 0.1 }}
                            className="group relative h-[400px] p-8 rounded-2xl overflow-hidden bg-[#111827] flex flex-col justify-between cursor-default border border-[#1F5AA6]/20 hover:border-[#2B7FFF] transition-all hover:shadow-[0_0_20px_rgba(43,127,255,0.1)]"
                        >

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-[#F3F4F6]/70 uppercase border border-[#2B7FFF]/20 rounded-full bg-[#2B7FFF]/10 group-hover:border-[#2B7FFF]/50 transition-colors">
                                    {job.period}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {job.role}
                                </h3>
                                <p className="text-lg font-medium mb-4 text-[#2B7FFF]">
                                    {job.company}
                                </p>
                            </div>

                            <div className="relative z-10">
                                <p className="text-[#F3F4F6]/70 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors">
                                    {job.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
