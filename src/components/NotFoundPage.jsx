import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentMetadata from '../hooks/useDocumentMetadata';

export default function NotFoundPage() {
    useDocumentMetadata({
        title: "Page Not Found | Kretoss Technology",
        description: "The page you are looking for does not exist. Back to home."
    });

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-[#0c0c0c] text-white py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#0037f0] opacity-20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                <h1 className="text-8xl md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2 md:mb-6 leading-none tracking-tighter drop-shadow-2xl">
                    404
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Page Not Found
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
                </p>

                <Link
                    to="/"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#44c7f6]/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(68,199,246,0.15)]"
                >
                    <span className="text-sm font-semibold tracking-wide uppercase text-white">Back to Homepage</span>
                    <svg
                        className="w-5 h-5 text-[#44c7f6] group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
