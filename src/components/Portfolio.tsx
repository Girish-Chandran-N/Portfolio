"use client";

import { motion } from "framer-motion";

const portfolioData = [
    {
        id: 1,
        title: "E-commerce Growth",
        category: "SEO & PPC Strategy",
        result: "+150% Traffic",
        description: "Comprehensive SEO audit and targeted PPC campaign for high-volume retail.",
        size: "col-span-1 md:col-span-2" // Featured item
    },
    {
        id: 2,
        title: "Social Brand Overhaul",
        category: "Content Strategy",
        result: "50k+ Followers",
        description: "Revamped Instagram and TikTok content strategy focusing on viral short-form video.",
        size: "col-span-1"
    },
    {
        id: 3,
        title: "B2B Lead Gen",
        category: "LinkedIn Ads",
        result: "-40% CPL",
        description: "High-conversion LinkedIn campaign targeting C-suite executives.",
        size: "col-span-1"
    },
    {
        id: 4,
        title: "Retention Automations",
        category: "CRM & Email",
        result: "30% Open Rate",
        description: "Automated email flows driving repeat purchases and customer loyalty.",
        size: "col-span-1 md:col-span-2"
    }
];

export default function Portfolio() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 z-20 bg-[#0B0F17] overflow-hidden">
            {/* Background Glow - Tech Blue */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#2B7FFF]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF4A1C]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2B7FFF]/30 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Selected Works
                    </h2>
                    <p className="text-[#F3F4F6]/60 text-xl max-w-2xl mx-auto">
                        A showcase of data-driven campaigns, creative strategies, and measurable results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden bg-[#111827] p-8 cursor-pointer border border-[#1F5AA6]/30 hover:border-[#2B7FFF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(43,127,255,0.15)] ${project.size}`}
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#2B7FFF] uppercase border border-[#2B7FFF]/20 rounded-full bg-[#2B7FFF]/10">
                                            {project.category}
                                        </span>
                                        <motion.div
                                            whileHover={{ rotate: 45 }}
                                            className="w-10 h-10 rounded-full bg-[#1F5AA6]/20 flex items-center justify-center border border-[#2B7FFF]/30 group-hover:bg-[#2B7FFF] group-hover:text-white transition-colors text-[#2B7FFF]"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m0-4H3"></path></svg>
                                        </motion.div>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[#2B7FFF] transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-2xl md:text-3xl font-bold text-[#FF4A1C]">
                                            {project.result}
                                        </span>
                                    </div>
                                    <p className="text-[#F3F4F6]/70 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
