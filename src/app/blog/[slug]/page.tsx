import { posts } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all posts
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-[#0B0F17] min-h-screen text-[#F3F4F6]">
            {/* Navigation */}
            <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center bg-[#0B0F17]/90 backdrop-blur-md border-b border-[#2B7FFF]/20">
                <Link
                    href="/blog"
                    className="flex items-center text-sm font-medium text-[#F3F4F6]/80 hover:text-[#2B7FFF] transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to All Insights
                </Link>
            </nav>

            {/* Hero Content */}
            <article className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
                <header className="mb-12 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-[#FF4A1C] mb-6 font-medium tracking-wide uppercase">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-[#FF4A1C] rounded-full"></span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
                        {post.title}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#2B7FFF] to-[#1F5AA6] rounded-full mx-auto md:mx-0"></div>
                </header>

                {/* Article Body */}
                <div
                    className="prose prose-invert prose-lg max-w-none text-[#F3F4F6]/80 prose-headings:text-white prose-a:text-[#2B7FFF] prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer / Contact CTA */}
                <div className="mt-20 pt-12 border-t border-[#2B7FFF]/20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Need help with your Digital Strategy?</h3>
                    <p className="text-[#F3F4F6]/60 mb-8">Let's discuss how we can grow your brand.</p>
                    <a
                        href="mailto:girishchandrannalini@gmail.com"
                        className="inline-block px-8 py-3 bg-[#2B7FFF] text-white font-bold rounded-full hover:bg-[#1F5AA6] transition-colors shadow-[0_0_20px_rgba(43,127,255,0.3)]"
                    >
                        Get in Touch
                    </a>
                </div>
            </article>
        </main>
    );
}
