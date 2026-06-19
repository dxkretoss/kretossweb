import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseUsData } from '../../data/hire-us';
import Badge from '../ui/Badge';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.benefit-card');

            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 lg:py-20 relative overflow-hidden bg-white">
            <div className="container mx-auto max-w-7xl px-4 relative z-10">

                <div className="text-center mb-8 lg:mb-10 flex flex-col items-center">
                    <div className='mb-5'>
                        <Badge variant="blue">Why Kretoss</Badge>
                    </div>
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-[#111] tracking-tight mb-6">
                        Why Companies Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don't just write code. We provide strategic technical partnerships to ensure your digital products succeed in the market.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {whyChooseUsData.map((item, idx) => (
                        <div
                            key={idx}
                            className="benefit-card bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#0037f0]/10 flex items-center justify-center mb-6 text-[#0037f0] transition-colors duration-300 group-hover:bg-[#0037f0] group-hover:text-white">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
