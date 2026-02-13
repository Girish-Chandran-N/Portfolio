import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import BlogSection from "@/components/BlogSection";

export default function Home() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <div className="relative">
                <ScrollyCanvas />
                <Overlay />
            </div>

            <div className="relative z-20 bg-[#121212]">
                <Portfolio />
                <Experience />
                <Education />
                <Skills />
                <BlogSection />
            </div>

            <footer className="py-20 text-center text-white/60 bg-neutral-900 border-t border-white/5 z-20 relative">
                <div className="max-w-xl mx-auto px-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Contact</h3>
                    <p className="mb-2">Eastbourne, England</p>
                    <p className="mb-4 text-lg text-white hover:text-blue-400 transition-colors">
                        <a href="mailto:girishchandrannalini@gmail.com">girishchandrannalini@gmail.com</a>
                    </p>
                    <p className="mb-8 font-mono text-sm tracking-widest">+44 7423717690</p>
                    <p className="text-xs opacity-40">© 2024 Girish Chandran Nalini. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
}
