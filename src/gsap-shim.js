// GSAP ESM Shim
// Maps React imports to the pre-loaded global GSAP instances in the browser.
// This prevents double-bundling, resolves tree-shaking issues, and reduces bundle size.

const gsap = window.gsap || {};
const ScrollTrigger = window.ScrollTrigger || {};

export { gsap, ScrollTrigger };
export default gsap;
