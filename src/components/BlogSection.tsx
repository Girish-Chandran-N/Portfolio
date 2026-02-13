"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogSection() {
    return (
        <section id="blog" className="relative w-full py-32 px-6 md:px-12 z-20 bg-[#0B0F17]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#2B7FFF]/20 pb-12"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Latest Insights</h2>
                        <p className="text-[#F3F4F6]/60 text-xl max-w-xl">Deep dives into marketing strategies, emerging tech, and brand building.</p>
                    </div>
                    {/* View All Posts Link */}
                    <Link href="/blog" className="hidden md:block text-[#2B7FFF] border-b border-[#2B7FFF]/30 pb-1 hover:text-[#FF4A1C] hover:border-[#FF4A1C] transition-colors">View all posts</Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={index} className="block h-full">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="flex flex-col justify-between h-full group cursor-pointer bg-[#111827] rounded-3xl p-8 border border-[#1F5AA6]/30 hover:border-[#2B7FFF] transition-all hover:shadow-[0_0_20px_rgba(43,127,255,0.1)]"
                            >
                                <div>
                                    <div className="flex items-center gap-3 text-sm text-[#FF4A1C] font-medium mb-6 uppercase tracking-wider">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-[#FF4A1C] rounded-full"></span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2B7FFF] transition-colors leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#F3F4F6]/70 leading-relaxed mb-8 line-clamp-3">
                                        {post.content.replace(/<[^>]+>/g, '').substring(0, 120)}...
                                    </p>
                                </div>
                                <div className="flex items-center text-white font-bold group-hover:text-[#2B7FFF] group-hover:gap-2 transition-all">
                                    Read Article
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m0-4H3"></path></svg>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
