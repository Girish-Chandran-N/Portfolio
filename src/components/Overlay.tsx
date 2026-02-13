"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Split into 4 sections (0-25%, 25-50%, 50-75%, 75-100%)
    // Updated: Started Name immediately (0) and MBA very early (0.15)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [50, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.45], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    const opacity4 = useTransform(scrollYProgress, [0.75, 0.85, 0.90, 0.98], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.75, 0.98], [50, -50]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center items-center">

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#2B7FFF] text-sm font-light tracking-widest uppercase flex flex-col items-center gap-2"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            >
                <span>Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-[#2B7FFF]/0 via-[#2B7FFF] to-[#2B7FFF]/0"></div>
            </motion.div>

            {/* Section 1: Name & Specialist Title */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute w-full px-6 md:px-10 text-center top-[20%]"
            >
                <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 text-white drop-shadow-2xl">
                    Girish Chandran Nalini
                </h1>
                <div className="inline-block px-4 md:px-6 py-2 border border-[#2B7FFF]/30 rounded-full bg-[#111827]/80 backdrop-blur-md shadow-[0_0_20px_rgba(43,127,255,0.2)]">
                    <p className="text-lg md:text-3xl text-[#2B7FFF] font-light tracking-wide">
                        Digital Marketing Specialist
                    </p>
                </div>
            </motion.div>

            {/* Section 2: MBA (Pushed Far Left) */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute w-full px-6 md:px-10 text-center md:text-left top-[30%] md:top-[35%]"
            >
                <div className="md:ml-20 max-w-2xl mx-auto md:mx-0">
                    <h2 className="text-3xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                        Master of Business <br />
                        <span className="text-[#2B7FFF]">
                            Administration
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Section 3: Experience (Pushed Far Right) */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute w-full px-6 md:px-10 text-center md:text-right top-[30%] md:top-[35%]"
            >
                <div className="md:ml-auto md:mr-20 max-w-2xl mx-auto md:mx-0">
                    <h2 className="text-3xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight mb-2 md:mb-4">
                        5 Years of <br />
                        <span className="text-[#FF4A1C]">
                            Experience
                        </span>
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-300 font-light italic">
                        in Digital Marketing & Strategy
                    </p>
                </div>
            </motion.div>

            {/* Section 4: Strategy (Pushed Far Left) */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute w-full px-6 md:px-10 text-center md:text-left top-[35%] md:top-[40%]"
            >
                <div className="md:ml-20 mx-auto md:mx-0">
                    <h2 className="text-4xl md:text-8xl font-bold text-white drop-shadow-lg leading-none">
                        Data-Driven <br />
                        <span className="text-[#2B7FFF]">
                            Startups
                        </span>
                    </h2>
                </div>
            </motion.div>
        </div>
    );
}
