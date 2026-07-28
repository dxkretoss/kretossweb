import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const SplitText = ({ text, startIndex = 1 }) => {
    const words = text.split(" ");
    let globalLetterIdx = startIndex;

    return (
        <>
            {words.map((word, wordIdx) => {
                const chars = word.split("");
                return (
                    <React.Fragment key={wordIdx}>
                        <div
                            className={`gsap_split_word gsap_split_word${wordIdx + 1}`}
                            aria-hidden="true"
                            style={{ position: "relative", display: "inline-block" }}
                        >
                            {chars.map((char, charIdx) => {
                                const currentIdx = globalLetterIdx++;
                                return (
                                    <div
                                        key={charIdx}
                                        className={`gsap_split_letter gsap_split_letter${currentIdx}`}
                                        aria-hidden="true"
                                        style={{ position: "relative", display: "inline-block" }}
                                    >
                                        {char}
                                    </div>
                                );
                            })}
                        </div>
                        {wordIdx < words.length - 1 && "\u00A0"}
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default function AnimatedHireButton({ href = "#", text = "HIRE DEVELOPERS", onClick, className = "", target }) {
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const button = buttonRef.current;
            if (!button) return;

            const frontLetters = button.querySelectorAll(".button-front-text .gsap_split_letter");
            const backLetters = button.querySelectorAll(".button-back-text .gsap_split_letter");
            const arrowIcon = button.querySelector(".hire-arrow-icon");

            // Initial setup: push back text down and explicitly set color so it's not invisible
            gsap.set(backLetters, { yPercent: 100, color: "#0037f0" });

            button.addEventListener("mouseenter", () => {
                gsap.killTweensOf([frontLetters, backLetters, arrowIcon]);

                gsap.to(frontLetters, { yPercent: -100, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                gsap.to(backLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });

                // Arrow moves slightly right
                gsap.to(arrowIcon, { x: 4, duration: 0.3, ease: "power2.out" });
            });

            button.addEventListener("mouseleave", () => {
                gsap.killTweensOf([frontLetters, backLetters, arrowIcon]);

                gsap.to(frontLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });
                gsap.to(backLetters, { yPercent: 100, duration: 0.4, stagger: 0.02, ease: "power2.out" });

                // Arrow back to center
                gsap.to(arrowIcon, { x: 0, duration: 0.3, ease: "power2.out" });
            });
        }, buttonRef);

        return () => ctx.revert();
    }, []);

    const isInternal = href.startsWith('/') && !href.startsWith('//');

    const buttonContent = (
        <>
            <div className="button-text-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="button-text-box" style={{ position: 'relative', color: '#0037f0' }}>
                    <div className="button-front-text" style={{ position: 'relative' }}>
                        <SplitText text={text} startIndex={1} />
                    </div>
                    {/* Absolutely positioned directly under the front text */}
                    <div className="button-back-text" style={{ position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none' }}>
                        <SplitText text={text} startIndex={100} />
                    </div>
                </div>
            </div>
            <div className="button-dot-box">
                <div className="button-dot" style={{ backgroundColor: '#0037f0' }}></div>
                <div className="button-dot" style={{ backgroundColor: '#0037f0' }}></div>
            </div>
            <div className="button-dot-box right-box">
                <div className="button-dot" style={{ backgroundColor: '#0037f0' }}></div>
                <div className="button-dot" style={{ backgroundColor: '#0037f0' }}></div>
            </div>
        </>
    );

    return isInternal ? (
        <Link
            ref={buttonRef}
            to={href}
            onClick={onClick}
            className={`inline-flex items-center gap-2 bg-[#f4f7ff] text-[#0037f0] border border-[#0037f0]/20 font-bold text-[13px] tracking-wide uppercase rounded-md shadow-sm ${className}`}
            aria-label={text}
            style={{ position: 'relative' }}
        >
            {buttonContent}
        </Link>
    ) : (
        <a
            ref={buttonRef}
            href={href}
            target={target}
            onClick={onClick}
            className={`inline-flex items-center gap-2 bg-[#f4f7ff] text-[#0037f0] border border-[#0037f0]/20 font-bold text-[13px] tracking-wide uppercase rounded-md shadow-sm ${className}`}
            aria-label={text}
            style={{ position: 'relative' }}
        >
            {buttonContent}
        </a>
    );
}
