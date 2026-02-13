import { posts } from "@/data/posts";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
    title: "Blog - Girish Chandran Nalini",
    description: "Insights on digital marketing, SEO, and brand strategy.",
};

export default function BlogListing() {
    return (
        <main className="bg-[#0B0F17] min-h-screen text-[#F3F4F6]">
            {/* Background Glow */}
            <div className="fixed top-0 left-0 w-full h-screen pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2B7FFF]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF4A1C]/5 rounded-full blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center bg-[#0B0F17]/90 backdrop-blur-md border-b border-[#2B7FFF]/20">
                <Link
                    href="/"
                    className="flex items-center text-sm font-medium text-[#F3F4F6]/80 hover:text-[#2B7FFF] transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Home
                </Link>
            </nav>

            <section className="relative w-full py-32 px-6 md:px-12 z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 border-b border-[#2B7FFF]/20 pb-12">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">All Insights</h1>
                        <p className="text-[#F3F4F6]/60 text-xl max-w-xl">Deep dives into marketing strategies, emerging tech, and brand building.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <Link href={`/blog/${post.slug}`} key={index} className="block h-full">
                                <article
                                    className="flex flex-col justify-between h-full group cursor-pointer bg-[#111827] rounded-3xl p-8 border border-[#1F5AA6]/30 hover:border-[#2B7FFF] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(43,127,255,0.15)]"
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
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
