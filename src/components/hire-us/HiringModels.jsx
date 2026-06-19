import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hiringModelsData } from '../../data/hire-us';
import Badge from '../ui/Badge';
import AnimatedButton from '../ui/AnimatedButton';

gsap.registerPlugin(ScrollTrigger);

export default function HiringModels() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.model-card');

            gsap.fromTo(cards,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 lg:py-10 relative overflow-hidden bg-[#f4f8ff]">
            <div className="container mx-auto max-w-7xl px-4 relative z-10">

                <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
                    <div className='mb-5'>
                        <Badge variant="blue">Engagement Models</Badge>
                    </div>
                    <h2 className="text-[24px] lg:text-[36px] font-bold text-[#111] tracking-tight mb-6">
                        Flexible Hiring Models
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you need a single developer or a complete product team, we offer engagement models tailored to your specific requirements and budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {hiringModelsData.map((model, idx) => (
                        <div
                            key={idx}
                            className={`model-card relative flex flex-col p-8 rounded-[24px] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] ${model.popular ? 'border-2 border-[#0037f0] shadow-lg scale-105 z-10' : 'border border-gray-200'}`}
                        >
                            {model.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-[#111] mb-4">{model.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                {model.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {model.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                                        <svg className="w-5 h-5 flex-shrink-0 text-[#0037f0] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 border-t border-gray-100">
                                <AnimatedButton
                                    text="Get Started"
                                    href="/contact"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
