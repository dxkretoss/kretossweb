import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// Register ScrollTrigger globally and bind to window to prevent Rollup/Vite tree-shaking
gsap.registerPlugin(ScrollTrigger);
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

// Robust layout calibration to handle race conditions where React mounts after window 'load' has fired
const refreshScrollTriggers = () => {
    setTimeout(() => {
        if (window.ScrollTrigger) {
            window.ScrollTrigger.refresh();
        }
    }, 250);
};

if (document.readyState === 'complete') {
    refreshScrollTriggers();
} else {
    window.addEventListener('load', refreshScrollTriggers);
}

// Recalibrate coordinates on the very first scroll interaction to ensure perfect alignment
const handleFirstScroll = () => {
    setTimeout(() => {
        if (window.ScrollTrigger) {
            window.ScrollTrigger.refresh();
        }
    }, 50);
    window.removeEventListener('scroll', handleFirstScroll);
};
window.addEventListener('scroll', handleFirstScroll);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
