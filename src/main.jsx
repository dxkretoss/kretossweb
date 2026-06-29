import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './indexbackup.css'
import App from './App.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger globally and bind to window to prevent Rollup/Vite tree-shaking
gsap.registerPlugin(ScrollTrigger);
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
