// import React, { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// // SplitText helper – identical to Hero.jsx and About.jsx versions
// const SplitText = ({ text, wordClassPrefix = "gsap_split_word", letterClassPrefix = "gsap_split_letter", startIndex = 1, plainStyle = false }) => {
//     const words = text.split(" ");
//     let globalLetterIdx = startIndex;

//     const letterStyle = plainStyle
//         ? { position: "relative", display: "inline-block" }
//         : {
//             position: "relative",
//             display: "inline-block",
//             opacity: "0",
//             translate: "none",
//             rotate: "none",
//             scale: "none",
//             transform: "translate3d(0px, 30px, 0px)"
//         };

//     return (
//         <>
//             {words.map((word, wordIdx) => {
//                 const chars = word.split("");
//                 return (
//                     <React.Fragment key={wordIdx}>
//                         <div
//                             className={`${wordClassPrefix} ${wordClassPrefix}${wordIdx + 1}`}
//                             aria-hidden="true"
//                             style={{ position: "relative", display: "inline-block" }}
//                         >
//                             {chars.map((char, charIdx) => {
//                                 const currentIdx = globalLetterIdx++;
//                                 return (
//                                     <div
//                                         key={charIdx}
//                                         className={`${letterClassPrefix} ${letterClassPrefix}${currentIdx}`}
//                                         aria-hidden="true"
//                                         style={letterStyle}
//                                     >
//                                         {char}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                         {wordIdx < words.length - 1 && " "}
//                     </React.Fragment>
//                 );
//             })}
//         </>
//     );
// };

// // Reusable CounterBox subcomponent for the statistical animations
// const CounterBox = ({ leftDigits, rightDigits, suffix, label, hasLine = true, rightOneClass = "" }) => {
//     return (
//         <div className="counter-number-box">
//             <div className="counter-single-box">
//                 <div className="counter-block" style={{ height: "60px", overflow: "hidden", display: "flex", position: "relative" }}>
//                     <div className="counter-left-box" style={{ display: "flex", flexDirection: "column" }}>
//                         {leftDigits.map((d, i) => (
//                             <div key={i} className="counter-box-title" style={{ height: "60px", lineHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
//                         ))}
//                     </div>
//                     <div className="counter-right-box" style={{ display: "flex", flexDirection: "column" }}>
//                         {rightDigits.map((d, i) => (
//                             <div key={i} className={`counter-box-title ${rightOneClass}`} style={{ height: "60px", lineHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
//                         ))}
//                     </div>
//                     <h2 className="counter-box-title" style={{ height: "60px", lineHeight: "60px", display: "flex", alignItems: "center" }}>{suffix}</h2>
//                 </div>
//                 <div className="counter-subtitle-text counter-number">
//                     <div className="counter-text">{label}</div>
//                 </div>
//                 {hasLine && (
//                     <div className="counter-bar">
//                         <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ad58d10421ab7969cf6518_Line%20928.png" loading="lazy" alt="img" />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// // Reusable ValueCard Component (Styled like homepage .step-single-card)
// const ValueCard = ({ id, title, description, icon }) => {
//     const isEven = parseInt(id, 10) % 2 === 0;
//     const cardClass = isEven ? "step-single-card _02" : "step-single-card";

//     return (
//         <div className="step-card-wrapper-data value-card">
//             <div className="step-card-wrapper-box" style={{ opacity: 0, transform: "scale(0.8)" }}>
//                 <div className={cardClass}>
//                     <div className="step-card-top">
//                         <div className="step-icon-box">
//                             <img src={icon} loading="lazy" alt="Value Icon" className="step-icon" />
//                         </div>
//                         <div className="step-date-box">
//                             <div className="step-date-text text-[#ff6b35] font-bold">VALUE {id}</div>
//                         </div>
//                     </div>
//                     <div className="step-card-bottom">
//                         <h3 className="step-card-title">{title}</h3>
//                         <div className="step-card-text">{description}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Reusable TeamMemberCard Component (Styled like homepage .testimonial-item-content review cards)
// const TeamMemberCard = ({ id, name, role, img, dataWId }) => {
//     const cardRef = useRef(null);

//     useLayoutEffect(() => {
//         const card = cardRef.current;
//         if (!card) return;

//         const ctx = gsap.context(() => {
//             const authorStar = card.querySelector(".review-author-star");
//             const textBox = card.querySelector(".review-text-box");
//             const overly = card.querySelector(".testimonial-image-overly");
//             const image = card.querySelector(".testimonial-image");

//             // Initial states (force visible in the marquee track)
//             gsap.set(authorStar, { y: 0, opacity: 1 });
//             gsap.set(textBox, { y: 20, opacity: 0 });
//             gsap.set(overly, { opacity: 1 });
//             gsap.set(image, { scale: 1 });

//             // Interactive hover listeners
//             card.addEventListener("mouseenter", () => {
//                 gsap.killTweensOf([authorStar, textBox, overly, image]);
//                 gsap.to(authorStar, { y: -20, opacity: 0, duration: 0.3, ease: "power2.out" });
//                 gsap.to(overly, { opacity: 0, duration: 0.3, ease: "power2.out" });
//                 gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power2.out" });
//                 gsap.to(textBox, { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: "power2.out" });
//             });

//             card.addEventListener("mouseleave", () => {
//                 gsap.killTweensOf([authorStar, textBox, overly, image]);
//                 gsap.to(textBox, { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" });
//                 gsap.to(image, { scale: 1.0, duration: 0.5, ease: "power2.out" });
//                 gsap.to(overly, { opacity: 1, duration: 0.3, ease: "power2.out" });
//                 gsap.to(authorStar, { y: 0, opacity: 1, duration: 0.3, delay: 0.1, ease: "power2.out" });
//             });
//         }, card);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <div 
//             ref={cardRef}
//             data-w-id={dataWId}
//             className={`testimonial-item-content team-member-card _0${id}`}
//             style={{ "willChange": "opacity, transform", "transformStyle": "preserve-3d" }}
//         >
//             <div className="testimonial-image-box">
//                 <img
//                     src={img}
//                     loading="lazy"
//                     sizes="100vw" alt="Team member"
//                     className="testimonial-image" 
//                 />
//                 <img
//                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b0eb4b7d940baadd7ed25d_Rectangle%20240649182.png"
//                     loading="lazy" style={{ "opacity": "1" }}
//                     alt="Abstract gradient overlay"
//                     className="testimonial-image-overly" 
//                 />
//             </div>
//             <div className="review-content-box">
//                 <div className="review-author-star">
//                     <img
//                         src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae9736111a514c404138c5_Frame%202147223258.svg"
//                         loading="lazy" alt="Icon" className="author-star-icon" 
//                     />
//                     <div className="review-author">{name}</div>
//                 </div>
//                 <div className="review-text-box">
//                     <div className="review-text-wrapper">
//                         <div className="rating-icon-quote">
//                             <img
//                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae9736111a514c404138c5_Frame%202147223258.svg"
//                                 loading="lazy" alt="Rating Star" className="rating-star" 
//                             />
//                         </div>
//                         <p className="review-box-text text-[#ff6b35] font-bold text-sm tracking-wider uppercase">{role}</p>
//                         <p className="review-box-text text-white/70 text-xs mt-1">Leading Kretoss Technology toward engineering excellence with scalable cloud and mobile architectures.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Reusable MilestoneStep Component (Timeline styled like works step-card-wrapper-data)
// const MilestoneStep = ({ id, year, title, description, isFirst, isLast }) => {
//     return (
//         <div className="step-card-wrapper-data milestone-node">
//             <div className="border-box-work">
//                 <div 
//                     className={`border-box-border border-box-border-milestone _${id}`}
//                     style={{ "willChange": "background", "backgroundColor": "rgb(180, 210, 249)" }}
//                 >
//                     <div className="border-circel-one">
//                         <div className="border-circel-two"></div>
//                     </div>
//                     {isFirst && <div className="border-circel-two-two"></div>}
//                 </div>
//                 <div className="border-work-title-box">
//                     <div className="border-work-title">{year}</div>
//                 </div>
//             </div>
//             <div className="step-card-wrapper-box" style={{ opacity: 0, transform: "scale(0.8)" }}>
//                 <div className="step-single-card">
//                     <div className="step-card-top">
//                         <div className="step-icon-box">
//                             <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" loading="lazy" alt="Icon" className="step-icon" />
//                         </div>
//                         <div className="step-date-box">
//                             <div className="step-date-text text-[#ff6b35] font-bold">ERA {id}</div>
//                         </div>
//                     </div>
//                     <div className="step-card-bottom">
//                         <h3 className="step-card-title">{title}</h3>
//                         <div className="step-card-text">{description}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default function AboutPage() {
//     const pageRef = useRef(null);

//     // Dynamic Lists
//     const coreValues = [
//         { id: "01", title: "Innovation", desc: "Pushing technical boundaries to build custom, cutting-edge software.", icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" },
//         { id: "02", title: "Client Centricity", desc: "Your growth and security are the primary metrics of our success.", icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" },
//         { id: "03", title: "Integrity", desc: "Open communication, crystal-clear roadmaps, and honest partnerships.", icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" },
//         { id: "04", title: "Excellence", desc: "We obsess over clean, high-performance architectures and designs.", icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" },
//         { id: "05", title: "Collaboration", desc: "Working in perfect sync with your product team to achieve success.", icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" },
//         { id: "06", title: "Agility", desc: "Adapting swiftly to changing technology landscape and dynamics.", icon: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe288817_files-02.svg" }
//     ];

//     const teamMembers = [
//         { id: 1, name: "Silva Olivia", role: "Founder & CEO", img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0bafa3ba75245d197f6_Rectangle%20240649176.webp", wId: "about-team-leader-01" },
//         { id: 2, name: "Ava Collins", role: "Managing Director", img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae945d663264bd9a69185a_Rectangle%20240649177.webp", wId: "about-team-leader-02" },
//         { id: 3, name: "Sophia Turner", role: "Head of Design", img: "https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aea0ad2b1630454c293acf_Group%202087325433.webp", wId: "about-team-leader-03" }
//     ];

//     const milestones = [
//         { id: "01", year: "2014", title: "Genesis Era", desc: "Founded Kretoss Technology, delivering smart custom mobile and web solutions." },
//         { id: "02", year: "2018", title: "Global Expansion", desc: "Opened corporate engineering hubs across the US and UK to support enterprises." },
//         { id: "03", year: "2022", title: "Enterprise Leadership", desc: "Delivered state-of-the-art SaaS platforms and highly tailored cloud ERP structures." },
//         { id: "04", year: "2026", title: "The Next Paradigm", desc: "Pioneering state-of-the-art serverless architectures and high-velocity digital products." }
//     ];

//     useLayoutEffect(() => {
//         let ctx;
//         const timer = setTimeout(() => {
//             gsap.registerPlugin(ScrollTrigger);
//             ctx = gsap.context(() => {
//                 // ========================================================
//                 // 1. Initial States (Synchronously set to avoid DOM flash)
//                 // ========================================================
//                 gsap.set(".about-page-hero-title", { opacity: 0, y: 80 });
//                 gsap.set(".about-page-hero-subtitle-box", { opacity: 0, y: 50 });
//                 gsap.set(".about-page-hero-text", { opacity: 0, y: 30 });
//                 gsap.set(".about-page-hero-button", { opacity: 0, y: 30 });
//                 gsap.set(".about-page-big-image", { scale: 0.9, opacity: 0 });

//                 // ========================================================
//                 // 2. Infinite Floating 3D Shapes
//                 // ========================================================
//                 gsap.to(".step-shape-icon", {
//                     rotateZ: "+=360",
//                     ease: "none",
//                     duration: 40,
//                     repeat: -1,
//                 });
//                 gsap.to(".services-shape", {
//                     rotateZ: "-=360",
//                     ease: "none",
//                     duration: 35,
//                     repeat: -1,
//                 });

//                 // ========================================================
//                 // 3. Hero Section Entrance Animation
//                 // ========================================================
//                 const heroTl = gsap.timeline();
//                 heroTl.to(".about-page-hero-subtitle-box", { opacity: 1, y: 0, duration: 1.0, ease: "power4.out" })
//                       .fromTo(".about-page-hero-subtitle-box .subtitle-image-icon",
//                           { rotate: 0, scale: 0 },
//                           { rotate: 116.964, scale: 1, duration: 1.0, ease: "power4.out" },
//                           "-=0.8"
//                       )
//                       .to(".about-page-hero-title", { opacity: 1, y: 0, duration: 1.0, ease: "power4.out" }, "-=0.6")
//                       .to(".about-page-hero-text", { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.5")
//                       .to(".about-page-hero-button", { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }, "-=0.6");

//                 // ========================================================
//                 // 4. Infinite Marquee
//                 // ========================================================
//                 gsap.to(".top-single-ticker", {
//                     xPercent: -50,
//                     ease: "none",
//                     duration: 25,
//                     repeat: -1,
//                 });

//                 // ========================================================
//                 // 5. Big Image Reveal
//                 // ========================================================
//                 gsap.to(".about-page-big-image", {
//                     scale: 1,
//                     opacity: 1,
//                     duration: 1.2,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: ".about-page-big-image",
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 });

//                 // ========================================================
//                 // 6. Statistics Counter Section (Dynamic rolling counters)
//                 // ========================================================
//                 const statsTl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: ".about-stats-container",
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 });

//                 statsTl.fromTo(".about-stats-container .about-left-box", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0, ease: "power4.out" })
//                        .fromTo(".about-stats-container .about-counter", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0, ease: "power4.out" }, "-=0.8");

//                 const counterLeftBoxes = pageRef.current?.querySelectorAll(".about-stats-container .counter-left-box");
//                 const counterRightBoxes = pageRef.current?.querySelectorAll(".about-stats-container .counter-right-box");

//                 if (counterLeftBoxes && counterRightBoxes) {
//                     statsTl.addLabel("counterStart", "-=0.8");

//                     counterLeftBoxes.forEach((leftBox, idx) => {
//                         const rightBox = counterRightBoxes[idx];
//                         if (leftBox && rightBox) {
//                             const leftTranslate = -(leftBox.children.length - 1) * 60;
//                             const rightTranslate = -(rightBox.children.length - 1) * 60;

//                             statsTl.fromTo(leftBox,
//                                 { y: 0 },
//                                 { y: leftTranslate, duration: 2.0, ease: "power3.out" },
//                                 "counterStart"
//                             );

//                             statsTl.fromTo(rightBox,
//                                 { y: 0 },
//                                 { y: rightTranslate, duration: 2.2, ease: "power3.out" },
//                                 "counterStart"
//                             );
//                         }
//                     });
//                 }

//                 // ========================================================
//                 // 7. Team presentation row (Left image, Right text)
//                 // ========================================================
//                 const teamPresTl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: ".about-team-pres-row",
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 });

//                 teamPresTl.fromTo(".about-team-pres-row .about-left-box", { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" })
//                           .fromTo(".about-team-pres-row .about-right-box", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=1.0");

//                 // ========================================================
//                 // 8. Core Values Grid staggered reveals
//                 // ========================================================
//                 const valueCards = gsap.utils.toArray(".values-grid .value-card .step-card-wrapper-box");
//                 gsap.to(valueCards, {
//                     scale: 1,
//                     opacity: 1,
//                     duration: 1.0,
//                     stagger: 0.12,
//                     ease: "power2.out",
//                     scrollTrigger: {
//                         trigger: ".values-grid",
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 });

//                 // ========================================================
//                 // 9. Leaders cards staggered entrance
//                 // ========================================================
//                 const teamCards = gsap.utils.toArray(".leaders-grid .team-member-card");
//                 gsap.to(teamCards, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 1.0,
//                     stagger: 0.15,
//                     ease: "power3.out",
//                     scrollTrigger: {
//                         trigger: ".leaders-grid",
//                         start: "top 80%",
//                         toggleActions: "play none none reverse"
//                     }
//                 });

//                 // ========================================================
//                 // 10. Milestone Staggered timeline line highlight
//                 // ========================================================
//                 const milestoneNodes = gsap.utils.toArray(".milestones-timeline-grid .milestone-node");

//                 milestoneNodes.forEach((node) => {
//                     const border = node.querySelector(".border-box-border-milestone");
//                     const cardBox = node.querySelector(".step-card-wrapper-box");
//                     gsap.set(cardBox, { scale: 0.8, opacity: 0 });
//                     gsap.set(border, { backgroundColor: "rgb(180, 210, 249)" });
//                 });

//                 const milestoneTl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: ".milestones-timeline-grid",
//                         start: "top 75%",
//                         end: "bottom bottom",
//                         scrub: 1,
//                     }
//                 });

//                 milestoneNodes.forEach((node, index) => {
//                     const border = node.querySelector(".border-box-border-milestone");
//                     const cardBox = node.querySelector(".step-card-wrapper-box");

//                     milestoneTl.to(cardBox, {
//                         scale: 1,
//                         opacity: 1,
//                         duration: 1.0,
//                         ease: "power2.out"
//                     }, index * 1.2)
//                     .to(border, {
//                         backgroundColor: "#0e54f1",
//                         duration: 1.0,
//                         ease: "power2.out"
//                     }, "<");
//                 });

//                 // ========================================================
//                 // 11. CTA Big Box Reveal
//                 // ========================================================
//                 const ctaTl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: ".about-ready-cta",
//                         start: "top 85%",
//                         toggleActions: "play none none reverse"
//                     }
//                 });

//                 ctaTl.fromTo(".about-ready-cta .review-black-box", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" })
//                      .fromTo(".about-ready-cta .review-section-quote", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.0, ease: "back.out(1.5)" }, "-=0.8");

//             }, pageRef.current);
//         }, 100);

//         return () => {
//             clearTimeout(timer);
//             if (ctx) ctx.revert();
//         };
//     }, []);

//     // Statistics configuration
//     const statisticsCounters = [
//         { left: [0, 1, 2, 3, 4, 5, 6, 7, 8], right: [5, 4, 3, 2, 1, 0, 6, 7, 5], suffix: "+", label: "Enterprise Apps" },
//         { left: [1, 2, 3, 4, 5, 6, 7, 8, 9], right: [8, 7, 6, 5, 3, 3, 2, 1, 8], suffix: "%", label: "Client Satisfaction" },
//         { left: [8, 7, 6, 5, 0, 1, 2, 3, 4], right: [0, 1, 2, 3, 4, 5, 6, 7, 0], suffix: "+", label: "Global Clients" },
//         { left: [9, 8, 7, 6, 5, 4, 3, 2, 1], right: [0, 1, 2, 3, 4, 5, 6, 7, 0], suffix: "+", label: "Years Experience", hasLine: false, rightOneClass: "one" }
//     ];

//     return (
//         <div ref={pageRef} className="about-page bg-[#0c0c0c] text-white overflow-hidden relative">

//             {/* Drifting Background shapes for the alive premium Webflow vibe */}
//             <div className="step-shape-box" style={{ top: "12%", left: "80%", opacity: "0.2" }}>
//                 <img
//                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b111dabcb84206b63f263a_cube-helix%202.svg"
//                     loading="lazy" alt="Helix shape" className="step-shape-icon"
//                 />
//             </div>
//             <div className="we-do-card-shape" style={{ top: "50%", left: "5%", opacity: "0.2", zIndex: "0" }}>
//                 <img
//                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69ae4068305c7423c896e05d_cone-float-active.svg"
//                     loading="lazy" alt="Cone shape" className="services-shape"
//                 />
//             </div>

//             {/* ========================================================
//                 1. Hero Section (Styled exactly like Home Hero/About)
//                 ======================================================== */}
//             <section className="about pt-32 pb-16">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">
//                     <div className="about-content-wrapper flex flex-col items-center text-center">

//                         <div className="about-page-hero-subtitle-box about-subtitle-box">
//                             <img
//                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
//                                 loading="lazy" alt="Star Icon" className="subtitle-image-icon"
//                             />
//                             <div className="about-subtitle-text">Who We Are</div>
//                         </div>

//                         <h1 className="about-page-hero-title about-section-title font-heading text-4xl md:text-6xl font-extrabold max-w-5xl leading-tight mt-6">
//                             We Engineer Scalable, Secure, & Smart Digital Experiences
//                         </h1>

//                         <div className="about-page-hero-text about-text max-w-3xl text-white/70 mt-8 text-lg">
//                             Trusted by global enterprises, Kretoss Technology is your dedicated technical partner for mobile applications, high-performance web development, and cloud solutions tailored to your unique scaling needs.
//                         </div>

//                         <div className="about-page-hero-button about-button mt-8">
//                             <a
//                                 href="#Contact" 
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     window.location.hash = '#home';
//                                     setTimeout(() => {
//                                         const element = document.getElementById('Contact');
//                                         if (element) element.scrollIntoView({ behavior: 'smooth' });
//                                     }, 100);
//                                 }}
//                                 className="primary-button w-inline-block"
//                                 aria-label="LET'S WORK TOGETHERLET'S WORK TOGETHER"
//                             >
//                                 <div className="button-text-wrapper">
//                                     <div className="button-text-box">
//                                         <div className="button-front-text">
//                                             <SplitText text="LET'S WORK TOGETHER" startIndex={1} plainStyle={true} />
//                                         </div>
//                                         <div className="button-back-text">
//                                             <SplitText text="LET'S WORK TOGETHER" startIndex={20} plainStyle={true} />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="button-arrow-box">
//                                     <div className="button-arrow-box-icon">
//                                         <img loading="lazy"
//                                             src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
//                                             alt="Button Icon" className="button-front-arrow"
//                                         />
//                                         <img loading="lazy"
//                                             src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
//                                             alt="Button Icon" className="button-back-arrow"
//                                             style={{ transform: "translate3d(-13px, 14px, 0px)" }}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="button-dot-box">
//                                     <div className="button-dot"></div>
//                                     <div className="button-dot"></div>
//                                 </div>
//                                 <div className="button-dot-box right-box">
//                                     <div className="button-dot"></div>
//                                     <div className="button-dot"></div>
//                                 </div>
//                             </a>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* ========================================================
//                 2. Infinite Moving Ticker (Styled like Product tickers)
//                 ======================================================== */}
//             <section className="bg-[#121212] border-y border-white/5 py-4 overflow-hidden relative">
//                 <div className="project-top-ticker">
//                     <div className="top-single-ticker text-sm uppercase tracking-widest text-[#ff6b35] font-bold flex gap-12 whitespace-nowrap">
//                         {Array.from({ length: 6 }).map((_, idx) => (
//                             <div key={idx} className="flex gap-12 items-center">
//                                 <span>UI/UX Engineering</span> 
//                                 <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg" alt="star" className="w-3 h-3" />
//                                 <span>Enterprise Cloud Architecture</span> 
//                                 <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg" alt="star" className="w-3 h-3" />
//                                 <span>High-Velocity Development</span> 
//                                 <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg" alt="star" className="w-3 h-3" />
//                                 <span>Affordable Tailored Systems</span> 
//                                 <img src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg" alt="star" className="w-3 h-3" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* ========================================================
//                 3. One Big Visual Image
//                 ======================================================== */}
//             <section className="py-12">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">
//                     <div className="about-page-big-image border border-white/10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#161616] to-[#0c0c0c] shadow-2xl relative">
//                         <img 
//                             src="/about-visual.png" 
//                             alt="Kretoss Technology Team Overview" 
//                             className="w-full h-auto object-cover max-h-[520px]"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                     </div>
//                 </div>
//             </section>

//             {/* ========================================================
//                 4. Stats Section (Dynamic rolling counters)
//                 ======================================================== */}
//             <section className="about py-16">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">
//                     <div className="about-stats-container about-content-wrapper grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//                         <div className="about-left-box" style={{ opacity: 0 }}>
//                             <div className="about-subtitle-box">
//                                 <img
//                                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
//                                     loading="lazy" alt="Star Icon" className="subtitle-image-icon"
//                                 />
//                                 <div className="about-subtitle-text">Performance Metrics</div>
//                             </div>
//                             <h2 className="about-section-title font-heading text-3xl md:text-4xl mt-6">
//                                 We Engineer Reliable Solutions Built for Scalable Growth
//                             </h2>
//                             <p className="about-text mt-6">
//                                 Over 12 years of core development experience enables Kretoss Technology to streamline code structures, optimize microservice coordinates, and deliver robust software designed to run seamlessly.
//                             </p>
//                         </div>

//                         <div className="about-counter" style={{ opacity: 0 }}>
//                             {statisticsCounters.map((counter, idx) => (
//                                 <CounterBox
//                                     key={idx}
//                                     leftDigits={counter.left}
//                                     rightDigits={counter.right}
//                                     suffix={counter.suffix}
//                                     label={counter.label}
//                                     hasLine={counter.hasLine}
//                                     rightOneClass={counter.rightOneClass}
//                                 />
//                             ))}
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* ========================================================
//                 5. Team Presentation (Left Image, Right Paragraph)
//                 ======================================================== */}
//             <section className="about py-16 bg-[#121212] border-y border-white/5">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">
//                     <div className="about-team-pres-row about-content-wrapper grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//                         <div className="about-left-box flex justify-center">
//                             <div className="about-block-right">
//                                 <img 
//                                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69b061673b4e2693104d760d_Frame%202147228677%20(1).webp" 
//                                     alt="Engineers collaborating" 
//                                     className="about-gallery-image _01 w-full h-auto object-cover rounded-2xl border border-white/10"
//                                     style={{ opacity: 1, transform: "none" }}
//                                 />
//                             </div>
//                         </div>

//                         <div className="about-right-box">
//                             <div className="about-title-text">
//                                 <div className="about-subtitle-box">
//                                     <img
//                                         src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
//                                         loading="lazy" alt="Star Icon" className="subtitle-image-icon"
//                                     />
//                                     <div className="about-subtitle-text">Who We Are</div>
//                                 </div>
//                                 <h2 className="about-section-title font-heading text-3xl md:text-4xl mt-6">
//                                     Dedicated Technical Experts Partnering in Your Success
//                                 </h2>
//                             </div>
//                             <div className="about-block mt-6">
//                                 <p className="about-text">
//                                     Our structured workflow aligns technical leaders, elite SaaS engineers, and certified project coordinators to achieve transparent outcomes. We believe in providing robust systems that remain affordable, support rapid iteration, and eliminate technical debt.
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* ========================================================
//                 6. Core Values Section (6 Cards, 3 in a Row)
//                 ======================================================== */}
//             <section className="step py-20">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">

//                     <div className="project-title-area text-center mb-16 flex flex-col items-center">
//                         <div className="project-subtitle-box bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-flex items-center">
//                             <img
//                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
//                                 loading="lazy" alt="Star Icon" className="subtitle-image-icon w-4 h-4 mr-2"
//                             />
//                             <div className="subtitle-text text-sm font-semibold tracking-wider uppercase text-[#ff6b35]">Company DNA</div>
//                         </div>
//                         <h2 className="title white font-heading text-4xl font-extrabold mt-6">
//                             What We Stand For
//                         </h2>
//                     </div>

//                     <div className="step-card-block-data values-grid grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {coreValues.map((val) => (
//                             <ValueCard
//                                 key={val.id}
//                                 id={val.id}
//                                 title={val.title}
//                                 description={val.desc}
//                                 icon={val.icon}
//                             />
//                         ))}
//                     </div>

//                 </div>
//             </section>

//             {/* ========================================================
//                 7. About Our Team Gallery (Interactive Testimonials Cards)
//                 ======================================================== */}
//             <section className="review py-20 bg-[#121212] border-y border-white/5">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">

//                     <div className="project-title-area text-center mb-16 flex flex-col items-center">
//                         <div className="project-subtitle-box bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-flex items-center">
//                             <img
//                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
//                                 loading="lazy" alt="Star Icon" className="subtitle-image-icon w-4 h-4 mr-2"
//                             />
//                             <div className="subtitle-text text-sm font-semibold tracking-wider uppercase text-[#ff6b35]">Leadership Team</div>
//                         </div>
//                         <h2 className="title white font-heading text-4xl font-extrabold mt-6">
//                             Meet Our Directors
//                         </h2>
//                     </div>

//                     <div className="leaders-grid grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {teamMembers.map((member) => (
//                             <TeamMemberCard
//                                 key={member.id}
//                                 id={member.id}
//                                 name={member.name}
//                                 role={member.role}
//                                 img={member.img}
//                                 dataWId={member.wId}
//                             />
//                         ))}
//                     </div>

//                 </div>
//             </section>

//             {/* ========================================================
//                 8. Our Milestone Section (Works Connected Timeline)
//                 ======================================================== */}
//             <section className="step py-20">
//                 <div className="w-layout-blockcontainer container w-container mx-auto">

//                     <div className="project-title-area text-center mb-16 flex flex-col items-center">
//                         <div className="project-subtitle-box bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-flex items-center">
//                             <img
//                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
//                                 loading="lazy" alt="Star Icon" className="subtitle-image-icon w-4 h-4 mr-2"
//                             />
//                             <div className="subtitle-text text-sm font-semibold tracking-wider uppercase text-[#ff6b35]">Historical Path</div>
//                         </div>
//                         <h2 className="title white font-heading text-4xl font-extrabold mt-6">
//                             Our Milestone Timeline
//                         </h2>
//                     </div>

//                     <div className="step-card-block-data milestones-timeline-grid flex flex-col items-center">
//                         <div className="step-card-wrapper max-w-4xl w-full relative">

//                             {milestones.map((stone, idx) => (
//                                 <MilestoneStep
//                                     key={stone.id}
//                                     id={stone.id}
//                                     year={stone.year}
//                                     title={stone.title}
//                                     description={stone.desc}
//                                     isFirst={idx === 0}
//                                     isLast={idx === milestones.length - 1}
//                                 />
//                             ))}

//                             <img
//                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/699c625038a0e177239d679e_dd.svg"
//                                 loading="lazy" alt="connector" className="process-middel-icon" 
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//             {/* ========================================================
//                 9. Ready to Start CTA (Stunning Black quote Box)
//                 ======================================================== */}
//             <section className="about-ready-cta py-16">
//                 <div className="w-layout-blockcontainer container w-container mx-auto px-4">
//                     <div className="review-black-box p-12 md:p-20 flex flex-col md:flex-row items-center justify-between border border-white/5 rounded-3xl bg-gradient-to-br from-[#161616] to-[#0c0c0c] shadow-2xl relative max-w-4xl mx-auto overflow-hidden">

//                         <div className="review-ssubtitle-title text-left max-w-xl">
//                             <div className="project-subtitle-box">
//                                 <img
//                                     src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg"
//                                     loading="lazy" alt="Icon" className="subtitle-image-icon"
//                                     style={{ transform: "rotate(116.964deg)" }} 
//                                 />
//                                 <div className="subtitle-text white">Get In Touch</div>
//                             </div>
//                             <h2 className="testimonial-title font-heading text-3xl md:text-4xl mt-6 text-white font-extrabold">
//                                 Ready to scale your next digital product?
//                             </h2>
//                             <div className="mt-8">
//                                 <a 
//                                     href="#Contact" 
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         window.location.hash = '#home';
//                                         setTimeout(() => {
//                                             const element = document.getElementById('Contact');
//                                             if (element) element.scrollIntoView({ behavior: 'smooth' });
//                                         }, 100);
//                                     }}
//                                     className="primary-button w-inline-block"
//                                     aria-label="START PROJECTSTART PROJECT"
//                                 >
//                                     <div className="button-text-wrapper">
//                                         <div className="button-text-box">
//                                             <div className="button-front-text">
//                                                 <SplitText text="START PROJECT" startIndex={1} plainStyle={true} />
//                                             </div>
//                                             <div className="button-back-text">
//                                                 <SplitText text="START PROJECT" startIndex={14} plainStyle={true} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="button-arrow-box">
//                                         <div className="button-arrow-box-icon">
//                                             <img loading="lazy"
//                                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
//                                                 alt="Button Icon" className="button-front-arrow"
//                                             />
//                                             <img loading="lazy"
//                                                 src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887bf_Arrow%20Right%20Up.svg"
//                                                 alt="Button Icon" className="button-back-arrow"
//                                                 style={{ transform: "translate3d(-13px, 14px, 0px)" }}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="button-dot-box">
//                                         <div className="button-dot"></div>
//                                         <div className="button-dot"></div>
//                                     </div>
//                                     <div className="button-dot-box right-box">
//                                         <div className="button-dot"></div>
//                                         <div className="button-dot"></div>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>

//                         <img
//                             src="https://cdn.prod.website-files.com/6996a337655d586ffe288775/69aeb31a38bdebd46ea4e4eb_Group%202087325413.svg"
//                             loading="lazy" alt="Quote Star"
//                             className="review-section-quote w-32 h-32 md:w-40 md:h-40 opacity-20 pointer-events-none mt-8 md:mt-0" 
//                         />

//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

import HeroSection from "./about/HeroSection";
import CompanyIntro from "./about/CompanyIntro";
import CoreValues from "./about/CoreValues";
import TeamSection from "./about/TeamSection";
import AwardsSection from "./about/AwardsSection";
import BlogSection from "./about/BlogSection";
import "../about-us.css";

export default function AboutPage() {
    return (
        <main className="about-page-wrapper">
            <HeroSection />
            <CompanyIntro />
            <CoreValues />
            <TeamSection />
            <AwardsSection />
            <BlogSection />
        </main>
    );
}