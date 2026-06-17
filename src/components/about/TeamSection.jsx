import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedButton from '../ui/AnimatedButton';
import Badge from '../ui/Badge';

const teamMembersTop = [
    {
        name: "Ankur Kavathiya",
        role: "CEO & Founder",
        image: "/grouppics/ankursir.png",
        link: "/teams/ankur-kavathiya"
    },
    {
        name: "Chintan Ramani",
        role: "Co-Founder",
        image: "/grouppics/chintansir.png",
        link: "/teams/chintan-ramani"
    }
];

export default function TeamSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.fromTo(".team-left-content",
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
            gsap.fromTo(".team-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".team-grid",
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-full bg-[#fafcff] text-black py-10 lg:py-20 relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

                {/* Left Content */}
                <div className="team-left-content lg:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left">


                    <div className='mb-5'>
                        <Badge variant="blue">Our Teams</Badge>
                    </div>

                    {/* Title */}
                    <h2 className="testimonial-title teams text-black" style={{ opacity: 1 }}>

                        <span className='bg-gradient-to-r from-[#44c7f6] to-[#0037f0] text-transparent bg-clip-text'>Kretoss Technology</span><br />
                        <span className="review-subtitle text-black">A top rated team</span></h2>


                    {/* Description */}
                    <p className="text-justify lg:text-left text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl">
                        Mr. Ankur Kavathiya & Chintan Ramani founded Kretoss Technology in 2015 with the goal of assisting and supporting the expansion of small and medium-sized businesses. They can establish an online presence for their company and build it to generate more and more revenue.
                    </p>

                    {/* Button */}
                    <div>
                        <AnimatedButton href="/team" text="MEET THE TEAM" />
                    </div>
                </div>

                {/* Right Content - Cards Grid */}
                <div className="team-grid lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-0 lg:mt-0">
                    {teamMembersTop.map((member, idx) => (
                        <a
                            key={idx}
                            href={'#'}
                            className="team-card flex flex-col bg-white rounded-md p-2 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 group w-full max-w-full lg:max-w-[350px] h-[420px] sm:h-[400px] mx-auto"
                        >
                            <div className="rounded-md overflow-hidden relative flex-1 bg-gray-100">
                                <img
                                    loading="lazy"
                                    alt={member.name}
                                    src={member.image}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="pt-3 pb-2 px-2 text-left">
                                <h3 className="text-lg font-bold text-gray-900 mb-0.5 tracking-tight">{member.name}</h3>
                                <p className="text-gray-500 font-medium text-sm">{member.role}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>

            {/* Background shapes (optional, from original) */}
            <div className="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
                <img src="https://cdn.prod.website-files.com/6988869bae0a8bee880dad7e/69c8db184a3afd8a87765d86_Group%201597883177.png" loading="lazy" alt="Shape" className="w-[400px] md:w-[600px] animate-pulse opacity-30" />
            </div>
        </section>
    );
}