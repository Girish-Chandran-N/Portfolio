"use client";

export default function Contact() {
    return (
        <footer className="w-full py-20 px-6 bg-[#0B0F17] border-t border-[#2B7FFF]/10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
                <div className="flex justify-center gap-8 mb-12">
                    <a href="mailto:girishchandrannalini@gmail.com" className="text-[#F3F4F6]/70 hover:text-[#2B7FFF] transition-colors">Email</a>
                    <a href="https://linkedin.com" className="text-[#F3F4F6]/70 hover:text-[#2B7FFF] transition-colors">LinkedIn</a>
                    <a href="https://github.com" className="text-[#F3F4F6]/70 hover:text-[#2B7FFF] transition-colors">GitHub</a>
                </div>
                <p className="text-[#F3F4F6]/40 text-sm">
                    © {new Date().getFullYear()} Girish Chandran Nalini. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
