import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

// Reusable SplitText component to generate letters for GSAP animations
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
                        {wordIdx < words.length - 1 && " "}
                    </React.Fragment>
                );
            })}
        </>
    );
};


export default function AnimatedButtonBorder({ href = "#Contact", text = "LET'S TALK", onClick, className = "", target }) {
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const button = buttonRef.current;
            if (!button) return;

            const frontLetters = button.querySelectorAll(".button-front-text .gsap_split_letter");
            const backLetters = button.querySelectorAll(".button-back-text .gsap_split_letter");
            const frontArrow = button.querySelector(".button-front-arrow");
            const backArrow = button.querySelector(".button-back-arrow");

            // Initial setup: push back text down
            gsap.set(backLetters, { yPercent: 100, color: "#ffffff" });

            button.addEventListener("mouseenter", () => {
                gsap.killTweensOf([frontLetters, backLetters, frontArrow, backArrow]);

                // Front text moves up
                gsap.to(frontLetters, { yPercent: -100, duration: 0.4, stagger: 0.02, ease: "power2.out" });

                // Back text moves to center (already white due to initial setup)
                gsap.to(backLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });

                // Arrows transition
                gsap.to(frontArrow, { x: 13, y: -14, duration: 0.4, ease: "power2.out" });
                gsap.to(backArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
            });

            button.addEventListener("mouseleave", () => {
                gsap.killTweensOf([frontLetters, backLetters, frontArrow, backArrow]);

                // Front text returns to center
                gsap.to(frontLetters, { yPercent: 0, duration: 0.4, stagger: 0.02, ease: "power2.out" });

                // Back text moves down again
                gsap.to(backLetters, { yPercent: 100, duration: 0.4, stagger: 0.02, ease: "power2.out" });

                // Arrows transition
                gsap.to(frontArrow, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
                gsap.to(backArrow, { x: -13, y: 14, duration: 0.4, ease: "power2.out" });
            });
        }, buttonRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={`hero-button ${className}`}>
            <a ref={buttonRef} href={href} target={target} onClick={onClick} className="primary-button w-inline-block" aria-label={text} style={{ backgroundColor: 'transparent', backgroundImage: 'none', position: 'relative' }}>
                <div className="button-text-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div className="button-text-box" style={{ position: 'relative' }}>
                        <div className="button-front-text">
                            <SplitText text={text} startIndex={1} />
                        </div>
                        {/* Absolutely positioned directly under the front text */}
                        <div className="button-back-text" style={{ position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none' }}>
                            <SplitText text={text} startIndex={100} />
                        </div>
                    </div>
                </div>
                <div className="button-dot-box">
                    <div className="button-dot"></div>
                    <div className="button-dot"></div>
                </div>
                <div className="button-dot-box right-box">
                    <div className="button-dot"></div>
                    <div className="button-dot"></div>
                </div>
            </a>
        </div>
    );
}
