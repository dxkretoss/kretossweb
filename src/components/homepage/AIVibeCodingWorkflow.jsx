
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Bot,
  Sparkles,
  Smartphone,
  TerminalSquare,
  ChevronRight,
  Zap,
  Layers,
  Users,
  RefreshCw,
} from "lucide-react";
import Badge from "../ui/Badge";

export default function AIVibeCodingWorkflow() {
  const [messages, setMessages] = useState([]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  /* ---------------- CHAT ANIMATION ---------------- */

  useEffect(() => {
    let timeoutIds = [];
    let isMounted = true;

    const runSequence = () => {
      setMessages([]);

      const sequence = [
        { sender: 'user', text: "Build a scalable mobile app with React Native and Node.js." },
        { sender: 'ai', text: "Analyzing requirements and provisioning architecture..." },
        { sender: 'ai', text: "Architecture generated. Integrating Claude & Replit." },
        { sender: 'ai', text: "Deployment pipeline ready. Launching application." }
      ];

      sequence.forEach((msg, index) => {
        const id = setTimeout(() => {
          if (isMounted) setMessages(prev => [...prev, msg]);
        }, (index + 1) * 2000);
        timeoutIds.push(id);
      });

      const resetId = setTimeout(() => {
        if (isMounted) runSequence();
      }, (sequence.length + 1) * 2000 + 4000);
      timeoutIds.push(resetId);
    };

    runSequence();

    return () => {
      isMounted = false;
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  /* ---------------- FEATURES ---------------- */

  const features = [
    {
      // icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="text-slate-800"><g><path d="M21 33a1 1 0 1 0 0 2 3 3 0 0 1 2.25 1.016.995.995 0 0 0 1.411.089.999.999 0 0 0 .088-1.411 5.002 5.002 0 0 0-3.75-1.693zM38 36c-1.654 0-3-1.346-3-3a1 1 0 0 0-2 0c0 .887.252 1.709.659 2.432-.018.025-.044.04-.059.067a3.014 3.014 0 0 1-1.849 1.406 1.001 1.001 0 0 0 .499 1.938c1.102-.284 2.064-.964 2.744-1.874A4.95 4.95 0 0 0 38.001 38a1 1 0 1 0 0-2zM44.353 29.1c-.98-.579-2.141-.777-3.265-.615a4.958 4.958 0 0 0-1.397-2.856.999.999 0 1 0-1.414 1.414 3.005 3.005 0 0 1 0 4.243.999.999 0 1 0 1.414 1.414 4.942 4.942 0 0 0 1.254-2.185c.03-.005.06.003.09-.005a3.022 3.022 0 0 1 2.302.312.996.996 0 0 0 1.369-.353 1 1 0 0 0-.353-1.37zM29.75 25.032c-1.102.284-2.064.964-2.743 1.874A4.952 4.952 0 0 0 24 25.875a1 1 0 0 0 0 2c1.654 0 3 1.346 3 3a1 1 0 0 0 2 0 4.94 4.94 0 0 0-.656-2.427c.018-.025.041-.046.057-.073a3.02 3.02 0 0 1 1.849-1.406 1 1 0 0 0-.499-1.937z" fill="#000000" opacity="1" data-original="#000000" className=""></path><path d="M60 28c-1.858 0-3.411 1.28-3.858 3h-5.224A6.94 6.94 0 0 0 51 30a7 7 0 0 0-5.525-6.84A7.948 7.948 0 0 0 44 20.753V9h8.142c.447 1.72 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.858 0-3.411 1.28-3.858 3H43a1 1 0 0 0-1 1v11.109C40.806 18.413 39.44 18 38 18a7.983 7.983 0 0 0-5 1.773V7.858c1.72-.447 3-2 3-3.858 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.858 1.28 3.411 3 3.858V18.68a6.951 6.951 0 0 0-3-.68 6.996 6.996 0 0 0-4.087 1.322A5.865 5.865 0 0 0 22 19V8a1 1 0 0 0-1-1h-9.142c-.447-1.72-2-3-3.858-3-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.411-1.28 3.858-3H20v10.35c-2.327.826-4 3.043-4 5.65 0 .69.122 1.365.363 2.017A6.975 6.975 0 0 0 13.3 31H7.857c-.447-1.72-2-3-3.858-3-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.411-1.279 3.858-3h5.142a6.995 6.995 0 0 0 6.038 6.927c.272.481.603.916.962 1.324V55h-8.142c-.447-1.721-2-3-3.858-3-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.411-1.279 3.858-3h9.142a1 1 0 0 0 1-1V42.914a7.97 7.97 0 0 0 4 1.086 8.015 8.015 0 0 0 3.089-.621 8.045 8.045 0 0 0 1.911 1.538v11.226c-1.72.447-3 1.999-3 3.858 0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.859-1.28-3.411-3-3.858V45.732c.649.17 1.318.269 2 .269a8.041 8.041 0 0 0 6.404-3.219c.196.055.396.089.596.124v13.095a1 1 0 0 0 1 1h9.142c.447 1.721 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.858 0-3.411 1.279-3.858 3h-8.142v-12.09c2.833-.478 5-2.942 5-5.91 0-.617-.099-1.228-.295-1.825a7.025 7.025 0 0 0 1.606-2.175h5.831c.447 1.721 2 3 3.858 3 2.206 0 4-1.794 4-4s-1.794-4-4-4zM56 6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM8 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM4 34c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm4 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm26 2c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm22-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM30 4c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm16.919 30.052c-.033.024-.133.1-.155.115a5.049 5.049 0 0 1-3.598.764 1 1 0 0 0-.332 1.972 6.964 6.964 0 0 0 4.091-.546c.037.214.075.428.075.643 0 2.206-1.794 4-4 4a3.963 3.963 0 0 1-1.594-.336 1 1 0 0 0-1.258.404A5.952 5.952 0 0 1 35 44a5.947 5.947 0 0 1-4.831-2.454c-.018-.025-.977-1.77-1.109-2.688a1 1 0 1 0-1.979.283c.126.883.41 1.743.82 2.537A5.993 5.993 0 0 1 26 42a6.028 6.028 0 0 1-5.421-3.444 1.001 1.001 0 0 0-.851-.571 4.994 4.994 0 0 1-1.666-9.595c.043-.018 1.94-.46 2.771-.32a1 1 0 0 0 .332-1.972 7.078 7.078 0 0 0-2.946.146 3.775 3.775 0 0 1-.22-1.242c0-2.206 1.794-4 4-4 .563 0 1.122.125 1.662.374a1 1 0 0 0 1.072-.152A4.992 4.992 0 0 1 28 20.003a4.96 4.96 0 0 1 3.893 1.881 4.959 4.959 0 0 1 1.037 2.285.999.999 0 0 0 1.152.82 1 1 0 0 0 .821-1.152 6.931 6.931 0 0 0-.858-2.331 5.992 5.992 0 0 1 3.954-1.503 6.026 6.026 0 0 1 5.758 4.326 1 1 0 0 0 .842.714 4.996 4.996 0 0 1 4.4 4.96 5.012 5.012 0 0 1-2.081 4.052zM60 34c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" fill="#000000" opacity="1" data-original="#000000" className=""></path><path d="M5 15h2v2H5zM9 15h6v2H9zM13 19h2v2h-2zM5 19h6v2H5zM49 15h2v2h-2zM53 15h6v2h-6zM57 19h2v2h-2zM49 19h6v2h-6zM5 43h2v2H5zM9 43h6v2H9zM13 47h2v2h-2zM5 47h6v2H5zM49 43h2v2h-2zM53 43h6v2h-6zM57 47h2v2h-2zM49 47h6v2h-6z" fill="#000000" opacity="1" data-original="#000000" className=""></path></g></svg>,
      icon: <Sparkles size={18} className="text-[#0c1736]" />,
      title: "AI Assisted Development",
    },
    {
      // icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="text-slate-800"><g><path fillRule="evenodd" d="M228.459 271.73a5.484 5.484 0 0 1-6.483 8.846l-27.434-20.153c-3.069-2.252-2.902-6.765.095-8.915l27.339-20.082a5.483 5.483 0 1 1 6.483 8.845l-21.414 15.73 21.414 15.73zm61.566 8.845a5.483 5.483 0 1 1-6.483-8.846l21.414-15.73-21.414-15.73a5.484 5.484 0 0 1 6.483-8.845l27.339 20.082c2.998 2.15 3.165 6.663.096 8.915l-27.435 20.153zm-43.306 11.065a5.483 5.483 0 0 1-10.09-4.294l28.654-66.988a5.483 5.483 0 0 1 10.09 4.294zm-87.496-139.649v56.541c17.819-36.26 54.881-60.303 96.778-60.303h160.176a5.496 5.496 0 0 1 5.496 5.496v11.306l45.241-33.925-45.241-33.925v11.306a5.496 5.496 0 0 1-5.496 5.496H255.991c-36.455 0-70.54 13.59-96.768 38.006zm-7.211 200.807h56.564a108.047 108.047 0 0 1-28.78-20.594c-19.707-19.708-31.369-46.195-31.566-76.205V95.824a5.496 5.496 0 0 1 5.496-5.496h11.306l-33.925-45.241-33.925 45.241h11.306a5.496 5.496 0 0 1 5.496 5.496V252.59l-.039 3.41c0 36.396 13.701 70.637 38.065 96.799zm200.766 7.21c-26.159 24.352-60.392 38.045-96.777 38.045l-3.435-.039H95.824a5.496 5.496 0 0 0-5.496 5.496v11.306l-45.241-33.925 45.241-33.925v11.306h.022a5.475 5.475 0 0 0 5.475 5.475l160.177.022c41.896 0 78.958-24.042 96.777-60.301v56.54zM408.997 259.1c.818-36.76-11.634-71.965-34.446-99.878h36.13v16.774c0 4.346 5.092 7.438 9.168 4.089l59.475-44.599c2.997-2.247 2.839-6.679-.094-8.83l-59.769-44.819c-3.648-2.736-8.762 0-8.759 4.38h-.022v16.774H258.37l-.592-.008c-36.646-.241-70.703 11.702-98.556 34.466v-36.131h16.774c4.346 0 7.438-5.092 4.089-9.168l-44.599-59.475c-2.247-2.997-6.679-2.839-8.83-.094L81.837 92.538c-2.736 3.648 0 8.762 4.38 8.759v.022h16.774v151.27l-.008 1.668c-.409 36.42 11.865 70.874 34.483 98.541h-36.149v-16.796c0-4.346-5.092-7.438-9.168-4.089l-59.475 44.599c-2.997 2.247-2.839 6.679.094 8.83l59.768 44.819c3.648 2.736 8.762 0 8.759-4.38h.022v-16.774h151.246l1.675.008c36.445.406 70.848-11.837 98.537-34.465v36.13h-16.774c-4.346 0-7.438 5.092-4.089 9.168l44.599 59.475c2.247 2.997 6.679 2.839 8.83-.094l44.819-59.769c2.736-3.648 0-8.762-4.38-8.759v-.022h-16.774V259.446c0-.117-.004-.232-.011-.347zm-45.226-3.019v160.094a5.496 5.496 0 0 1-5.496 5.496h-11.306l33.925 45.241 33.925-45.241h-11.306a5.496 5.496 0 0 1-5.496-5.496l.04-160.176c0-36.386-13.693-70.618-38.045-96.778h-56.541c36.153 17.766 60.565 55.192 60.302 96.86zm-10.993-.082c.251-26.38-11.076-51.165-28.344-68.433-37.793-37.793-99.073-37.793-136.866 0s-37.793 99.073 0 136.866 99.073 37.793 136.866 0c17.515-17.515 28.344-41.711 28.344-68.433z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>,
      icon: <Zap size={18} className="text-[#0c1736]" />,
      title: "Rapid MVP Building",
    },
    {
      // icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 64 64" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="text-slate-800"><g><path d="M16.104 32A15.912 15.912 0 0 0 32 47.894c21.087-.873 21.08-30.92 0-31.789A15.912 15.912 0 0 0 16.104 32zm29.739-1h-1.844a1 1 0 0 0 0 2h1.844a13.895 13.895 0 0 1-12.844 12.843v-1.844a1 1 0 0 0-2 0v1.844A13.895 13.895 0 0 1 18.155 33H20a1 1 0 0 0 0-2h-1.845A13.896 13.896 0 0 1 31 18.156V20a1 1 0 0 0 2 0v-1.844A13.896 13.896 0 0 1 45.843 31z" fill="#000000" opacity="1" data-original="#000000"></path><path d="M58.799 24.706a1 1 0 0 0-1.93.524c6.343 23.961-21.276 42.116-40.714 27.084l4.866.596a.982.982 0 0 0 1.114-.87.999.999 0 0 0-.87-1.114l-8.072-.99a1.015 1.015 0 0 0-1.114 1.114l.988 8.071a1 1 0 0 0 1.985-.242l-.661-5.404c21.046 16.944 51.214-2.6 44.408-28.769zM13.778 13.778a25.803 25.803 0 0 1 34.067-2.092l-4.865-.596a1 1 0 0 0-.245 1.984l8.072.99a1.013 1.013 0 0 0 1.114-1.114l-.988-8.071a.987.987 0 0 0-1.114-.871.998.998 0 0 0-.87 1.113l.66 5.409A27.771 27.771 0 0 0 4.76 37.406a1 1 0 0 0 1.963-.386 25.751 25.751 0 0 1 7.056-23.242z" fill="#000000" opacity="1" data-original="#000000"></path><path d="M32.999 31.62v-4.935a1 1 0 0 0-2 0V32a.999.999 0 0 0 .253.665l6.48 7.271a1 1 0 0 0 1.494-1.33z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>,
      icon: <Users size={18} className="text-[#0c1736]" />,
      title: "Real-Time Collaboration",
    },
    {
      // icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="text-slate-800"><g><path d="m318.125 457.906-8.209 8.209a25 25 0 0 1-17.678 7.322h-72.477a25.004 25.004 0 0 1-17.678-7.322l-8.209-8.209H15a7.5 7.5 0 0 0-7.5 7.5V479.5c0 13.807 11.193 25 25 25h447c13.807 0 25-11.193 25-25v-14.094a7.5 7.5 0 0 0-7.5-7.5H318.125zM137.812 457.906H32.5c-13.807 0-25-11.193-25-25V249.938c0-13.807 11.193-25 25-25h105.312c13.807 0 25 11.193 25 25v182.969c0 13.806-11.192 24.999-25 24.999z" style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" data-original="#000000"></path><path d="M131.75 359.486V261a5 5 0 0 0-5-5h-21.685c-2.313 0-4.286 1.596-4.856 3.838-1.708 6.722-7.8 11.693-15.053 11.693s-13.345-4.972-15.053-11.693c-.57-2.241-2.543-3.838-4.856-3.838H43.562a5 5 0 0 0-5 5v160.844a5 5 0 0 0 5 5h83.188a5 5 0 0 0 5-5v-27.358M479.5 349.188H249.938c-13.807 0-25-11.193-25-25V156.75c0-13.807 11.193-25 25-25H479.5c13.807 0 25 11.193 25 25v167.438c0 13.807-11.193 25-25 25z" style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" data-original="#000000"></path><path d="M378.759 318.125H256V162.812h186.375v155.313h-28.616M473.438 457.906V349.188M224.937 162.812H63.562c-13.807 0-25 11.193-25 25v37.125M162.812 426.844h279.563v-77.656" style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" data-original="#000000"></path><path d="M134.244 193.875H69.625v31.063M224.937 193.875h-55.693M473.438 224.938V256M326.89 240.469l14.865 14.865 29.73-29.73M69.625 341.422l10.354 10.354 20.709-20.708M328.496 131.75a78.324 78.324 0 0 0 2.181-5.681 5.576 5.576 0 0 1 2.795-3.186l12.607-6.304a5.623 5.623 0 0 0 3.109-5.031v-21.72a5.625 5.625 0 0 0-3.109-5.031l-12.607-6.303a5.58 5.58 0 0 1-2.795-3.186 78.397 78.397 0 0 0-3.924-9.466 5.584 5.584 0 0 1-.28-4.234l4.459-13.377a5.623 5.623 0 0 0-1.359-5.756l-15.359-15.359a5.623 5.623 0 0 0-5.756-1.359l-13.377 4.459a5.575 5.575 0 0 1-4.234-.28 78.236 78.236 0 0 0-9.466-3.924 5.578 5.578 0 0 1-3.186-2.794l-6.303-12.607a5.625 5.625 0 0 0-5.031-3.109h-21.72a5.625 5.625 0 0 0-5.031 3.109l-6.303 12.607a5.575 5.575 0 0 1-3.186 2.794 78.397 78.397 0 0 0-9.466 3.924 5.584 5.584 0 0 1-4.234.28l-13.377-4.459a5.623 5.623 0 0 0-5.756 1.359l-15.359 15.359a5.623 5.623 0 0 0-1.359 5.756l4.459 13.377a5.575 5.575 0 0 1-.28 4.234 78.236 78.236 0 0 0-3.924 9.466 5.576 5.576 0 0 1-2.795 3.186l-12.607 6.303a5.625 5.625 0 0 0-3.109 5.031v21.72a5.625 5.625 0 0 0 3.109 5.031l12.607 6.304a5.58 5.58 0 0 1 2.795 3.186 78.397 78.397 0 0 0 3.924 9.466c.65 1.318.744 2.84.28 4.234l-4.459 13.377a5.623 5.623 0 0 0 1.359 5.756l3.911 3.911" style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" data-original="#000000"></path><path d="m261.768 131.75 31.063-31.063c6.065-6.065 6.065-15.899 0-21.965-6.065-6.065-15.899-6.065-21.964 0l-21.965 21.965-10.982-10.982c-6.065-6.065-15.899-6.065-21.964 0-6.065 6.065-6.065 15.899 0 21.965l21.93 21.93.034.034c.265.265.538.518.816.76" style={{ strokeWidth: 15, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 }} fill="none" stroke="#000000" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" data-original="#000000"></path></g></svg>,
      icon: <Smartphone size={18} className="text-[#0c1736]" />,
      title: "Cross Platform Apps",
    },
    {
      // icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="text-slate-800"><g><path d="M441.322 412.713c-30.471 37.032-70.976 63.938-117.136 77.81-22.684 6.816-45.959 10.223-69.223 10.223-25.1 0-50.187-3.963-74.514-11.881C114.152 467.289 61.03 418.68 33.591 354.843l-5.499 20.455c-1.003 3.732-4.845 5.95-8.577 4.942a7 7 0 0 1-4.942-8.577l11.137-41.424a7.002 7.002 0 0 1 10.022-4.376l37.756 19.889a7.001 7.001 0 0 1 2.931 9.456 7.004 7.004 0 0 1-9.456 2.931l-21.585-11.371c25.52 61.382 76.084 108.177 139.404 128.785 88.088 28.667 186.836-.16 245.729-71.733a7 7 0 1 1 10.811 8.895zm33.102-71.188a6.997 6.997 0 0 0-9.12 3.849 227.85 227.85 0 0 1-11.862 24.774 7 7 0 0 0 12.237 6.801 241.695 241.695 0 0 0 12.595-26.304 6.999 6.999 0 0 0-3.849-9.12zm12.911-66.096c-3.872-.249-7.197 2.649-7.462 6.505a226.718 226.718 0 0 1-3.261 25.773 7 7 0 1 0 13.764 2.554 240.844 240.844 0 0 0 3.463-27.371 7 7 0 0 0-6.505-7.462zm16.3-96.622c-3.579-1.458-7.664.268-9.12 3.849l-7.976 19.621c-19.37-66.729-66.104-121.508-129.241-151.083-40.82-19.123-85.988-26.437-130.619-21.15a7 7 0 0 0 1.646 13.902c42.036-4.98 84.58 1.911 123.033 19.926 60.305 28.248 104.724 80.914 122.491 144.969l-20.023-13.943a7 7 0 1 0-8 11.488l35.021 24.388a6.997 6.997 0 0 0 10.484-3.108l16.152-39.737a7 7 0 0 0-3.849-9.12zm-294.961-13.211v20.891c0 5.188-3.694 9.681-8.784 10.683l-7.593 1.497-5.253 12.679 4.312 6.432c2.889 4.307 2.324 10.095-1.344 13.762l-14.771 14.771c-3.666 3.667-9.456 4.232-13.764 1.344l-6.43-4.312-12.679 5.253-1.498 7.596c-1.004 5.089-5.496 8.781-10.682 8.781h-20.891c-5.188 0-9.681-3.694-10.683-8.784l-1.498-7.594-12.679-5.253-6.431 4.312c-4.307 2.89-10.097 2.324-13.764-1.345l-14.77-14.771c-3.669-3.665-4.234-9.454-1.344-13.763l4.312-6.431-5.253-12.679-7.596-1.498c-5.087-1.001-8.781-5.493-8.781-10.682v-20.891c0-5.186 3.692-9.678 8.78-10.682l7.597-1.498 5.253-12.679-4.312-6.432c-2.89-4.308-2.324-10.097 1.346-13.764l14.771-14.77c3.666-3.669 9.456-4.232 13.763-1.344l6.43 4.312 12.679-5.253 1.499-7.597c1.001-5.087 5.493-8.781 10.682-8.781h20.891c5.186 0 9.678 3.692 10.682 8.78l1.498 7.598 12.679 5.253 6.431-4.312c4.307-2.889 10.094-2.322 13.762 1.342l14.772 14.773c3.667 3.666 4.232 9.454 1.345 13.762l-4.313 6.432 5.253 12.679 7.595 1.498c5.09 1.004 8.782 5.496 8.782 10.682zm-14 2.559-8.764-1.729a6.995 6.995 0 0 1-5.112-4.188l-8.122-19.605a7.001 7.001 0 0 1 .653-6.577l4.976-7.421-11.153-11.153-7.421 4.976a6.993 6.993 0 0 1-6.577.653l-19.605-8.122a6.995 6.995 0 0 1-4.188-5.113l-1.729-8.764h-15.773l-1.729 8.765a6.996 6.996 0 0 1-4.188 5.112l-19.605 8.122a7.001 7.001 0 0 1-6.577-.653l-7.42-4.976-11.153 11.153 4.976 7.421a6.997 6.997 0 0 1 .653 6.578l-8.123 19.605a7 7 0 0 1-5.112 4.188l-8.764 1.729v15.773l8.764 1.729a6.995 6.995 0 0 1 5.112 4.188l8.123 19.606a7.003 7.003 0 0 1-.653 6.578l-4.976 7.42 11.153 11.153 7.42-4.976a6.993 6.993 0 0 1 6.577-.653l19.605 8.122a6.996 6.996 0 0 1 4.188 5.112l1.729 8.765h15.773l1.729-8.764a6.995 6.995 0 0 1 4.188-5.112l19.605-8.123a7.002 7.002 0 0 1 6.578.653l7.421 4.976 11.153-11.153-4.976-7.42a6.995 6.995 0 0 1-.653-6.577l8.122-19.606a6.995 6.995 0 0 1 5.112-4.188l8.764-1.729v-15.773zm-25.914 7.887c0 27.027-21.988 49.017-49.016 49.017s-49.017-21.989-49.017-49.017 21.989-49.016 49.017-49.016 49.016 21.988 49.016 49.016zm-14 0c0-19.308-15.708-35.016-35.016-35.016s-35.017 15.708-35.017 35.016 15.708 35.017 35.017 35.017 35.016-15.708 35.016-35.017zm-42.016 126.901H10.999a7 7 0 0 1-7-7V18.254a7 7 0 0 1 7-7h143.1c6.443 0 12.344 2.573 17.067 7.443l56.88 56.879c4.87 4.724 7.443 10.625 7.443 17.069v76.396h78.848v-15.08c0-9.53 7.753-17.284 17.283-17.284h44.161c9.53 0 17.283 7.754 17.283 17.284v44.16c0 9.53-7.753 17.284-17.283 17.284H331.62c-9.53 0-17.283-7.754-17.283-17.284v-15.08h-78.848v87.313h78.848v-15.08c0-9.53 7.753-17.283 17.283-17.283h44.161c9.53 0 17.283 7.753 17.283 17.283v44.16c0 9.53-7.753 17.283-17.283 17.283H331.62c-9.53 0-17.283-7.753-17.283-17.283v-15.08h-78.848v11.588a7 7 0 0 1-7 7H126.744v68.726h187.593v-15.08c0-9.53 7.753-17.283 17.283-17.283h44.161c9.53 0 17.283 7.753 17.283 17.283v44.161c0 9.53-7.753 17.283-17.283 17.283H331.62c-9.53 0-17.283-7.753-17.283-17.283v-15.081H119.744a7 7 0 0 1-7-7v-75.726zm215.593 97.807c0 1.779 1.504 3.283 3.283 3.283h44.161c1.779 0 3.283-1.504 3.283-3.283v-44.161c0-1.779-1.504-3.283-3.283-3.283H331.62c-1.779 0-3.283 1.504-3.283 3.283zm0-101.314c0 1.779 1.504 3.283 3.283 3.283h44.161c1.779 0 3.283-1.504 3.283-3.283v-44.16c0-1.779-1.504-3.283-3.283-3.283H331.62c-1.779 0-3.283 1.504-3.283 3.283zm0-101.313c0 1.78 1.504 3.284 3.283 3.284h44.161c1.779 0 3.283-1.504 3.283-3.284v-44.16c0-1.78-1.504-3.284-3.283-3.284H331.62c-1.779 0-3.283 1.504-3.283 3.284zM179.009 67.735h21.397l-21.397-21.397zM17.999 288.943h203.49V92.646c0-2.65-1.051-4.954-3.214-7.043a3.528 3.528 0 0 1-.087-.086l-.391-.391a11.973 11.973 0 0 0-8.356-3.392h-37.433a7 7 0 0 1-7-7V37.301c0-3.121-1.202-6.085-3.385-8.349l-.399-.399a3.528 3.528 0 0 1-.086-.087c-2.089-2.163-4.392-3.214-7.041-3.214H17.999V288.94z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>,
      icon: <RefreshCw size={18} className="text-[#0c1736]" />,
      title: "Automated Workflows",
    },
    {
      // icon: <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} xmlSpace="preserve" className="text-slate-800"><g><path d="M480 64a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8h-96v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8h-96v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8v128h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8v16H32a8 8 0 0 0-8 8v224a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-88h48v8a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-8h96v8a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8h-8V240h8a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8h-8V64Zm-24-32h16v16h-16Zm-144 0h16v16h-16Zm-144 0h16v16h-16Zm0 176h16v16h-16Zm64 272H40V272h192Zm133.657-365.657L347.313 96H408v60.686l-18.343-18.343a8 8 0 0 0-11.314 0L248 268.686V264a8 8 0 0 0-8-8h-4.686l130.343-130.343a8 8 0 0 0 0-11.314ZM328 400h-16v-16h16Zm144 0h-16v-16h16Zm0-176h-16v-16h16Zm-16-32h-8a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h8v128h-8a8 8 0 0 0-8 8v8h-96v-8a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v8h-48v-92.686l136-136 26.343 26.343A8 8 0 0 0 424 176V88a8 8 0 0 0-8-8h-88a8 8 0 0 0-5.657 13.657L348.686 120l-136 136H184v-16h8a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8h-8V64h8a8 8 0 0 0 8-8v-8h96v8a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-8h96v8a8 8 0 0 0 8 8h8Z" fill="#000000" opacity="1" data-original="#000000"></path><path d="M181.086 306.872a63.469 63.469 0 0 0-45.063-18.862h-.041a63.982 63.982 0 0 0-42.7 111.633 8.079 8.079 0 0 1 2.715 6V408a23.844 23.844 0 0 0 2.346 10.341A7.972 7.972 0 0 0 96 424v16a24.028 24.028 0 0 0 24 24h32a24.028 24.028 0 0 0 24-24v-16a7.972 7.972 0 0 0-2.346-5.659A23.844 23.844 0 0 0 176 408v-2.361a8.081 8.081 0 0 1 2.714-6 63.638 63.638 0 0 0 2.372-92.771ZM160 440a8.009 8.009 0 0 1-8 8h-32a8.009 8.009 0 0 1-8-8v-8h48Zm-32-88h16l-8 10.667Zm40.032 35.73A24.11 24.11 0 0 0 160 405.639V408a8.009 8.009 0 0 1-8 8h-8v-37.334l22.4-29.866A8 8 0 0 0 160 336h-48a8 8 0 0 0-6.4 12.8l22.4 29.866V416h-8a8.009 8.009 0 0 1-8-8v-2.361a24.108 24.108 0 0 0-8.033-17.909A48.062 48.062 0 0 1 88 352a48.5 48.5 0 0 1 47.987-47.99h.031a47.98 47.98 0 0 1 32.014 83.72Z" fill="#000000" opacity="1" data-original="#000000"></path></g></svg>,
      icon: <Layers size={18} className="text-[#0c1736]" />,
      title: "Scalable Architecture",
    },
  ];

  /* ---------------- AI TOOLS ---------------- */

  const tools = [
    {
      title: "Claude AI",
      icon: <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=128" alt="Claude AI" className="w-6 h-6 object-contain rounded-sm" />,
      color: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/20",
      iconColor: "text-pink-400",
      description:
        "Advanced AI reasoning for architecture, debugging, planning, and intelligent development workflows.",
      position:
        "top-[2%] left-0 md:left-[2%]",
    },

    {
      title: "Replit",
      icon: <img src="https://www.google.com/s2/favicons?domain=replit.com&sz=128" alt="Replit" className="w-6 h-6 object-contain rounded-sm" />,
      color: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20",
      iconColor: "text-orange-400",
      description:
        "Cloud-powered development environment for rapid prototyping and collaborative coding.",
      position:
        "top-[10%] right-0 md:right-[2%]",
    },

    {
      title: "Lovable.ai",
      icon: <img src="https://www.google.com/s2/favicons?domain=lovable.dev&sz=128" alt="Lovable.ai" className="w-6 h-6 object-contain rounded-sm" />,
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
      iconColor: "text-purple-400",
      description:
        "AI product builder transforming prompts into polished applications and interfaces instantly.",
      position:
        "bottom-[10%] left-0 md:left-[2%]",
    },

    {
      title: "Google AI Studio",
      icon: <img src="https://www.google.com/s2/favicons?domain=aistudio.google.com&sz=128" alt="Google AI Studio" className="w-6 h-6 object-contain rounded-sm" />,
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20",
      iconColor: "text-green-400",
      description:
        "A web-based prototyping environment for generative AI models, offering the fastest way to build with Gemini.",
      position:
        "bottom-[2%] right-0 md:right-[2%]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafcff] py-10 md:py-16">
      {/* ---------------- BACKGROUND ---------------- */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow Effects */}

      {/* <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" /> */}

      {/* <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" /> */}

      {/* ---------------- CONTENT ---------------- */}

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-5 lg:gap-24 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            {/* Badge */}
            <div className="flex justify-start mb-5">
              <Badge variant="blue">Vibe Coding</Badge>
            </div>


            {/* Heading */}

            <h2 className="technology-section-title flex flex-wrap gap-x-2 gap-y-1 text-3xl sm:text-4xl md:text-5xl font-semibold !mb-4 md:!mb-6 tracking-tight text-[#0c1736]">
              AI-Powered
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vibe Coding
              </span>
              Workflow
            </h2>

            {/* Description */}

            <div className="relative mt-4 md:mt-8 mb-2 md:mb-0">
              <p className={`max-w-2xl text-sm md:text-lg leading-relaxed text-slate-600 ${!isDescriptionExpanded ? 'line-clamp-2 md:line-clamp-none' : ''}`}>
                Our AI-powered development workflow blends intelligent automation with expert
                engineering to accelerate every stage of product development. We leverage
                modern AI tools for research, design, coding, testing, and deployment,
                enabling startups and enterprises to build scalable, high-quality digital
                products in a fraction of the traditional timeline.
              </p>
              <button 
                  type="button"
                  onClick={(e) => { e.preventDefault(); setIsDescriptionExpanded(!isDescriptionExpanded); }}
                  className="md:hidden text-[#44c7f6] text-sm font-semibold hover:text-[#0037f0] transition-colors mt-1"
              >
                  {isDescriptionExpanded ? 'See less' : 'See more...'}
              </button>
            </div>

            {/* Features */}

            <div className="mt-6 md:mt-12 grid gap-4 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white shadow-sm p-2 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
                >
                  <div className="rounded-xl bg-[#0c1736]/5 p-2">
                    {item.icon}
                  </div>

                  <span className="text-sm font-medium text-[#0c1736]">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}


          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="relative flex h-[500px] sm:h-[600px] lg:h-[750px] items-center justify-center mt-12 lg:mt-0">
            {/* Rings */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[320px] w-[320px] md:h-[520px] md:w-[520px] rounded-full border border-cyan-500/20"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[450px] w-[450px] md:h-[700px] md:w-[700px] rounded-full border border-dashed border-purple-500/20"
            />

            {/* Chat UI Dashboard */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 w-[90%] sm:w-full max-w-[320px] md:max-w-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
            >
              {/* Header */}

              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 bg-slate-50/80">
                <div className="p-2 bg-blue-100/50 border border-blue-200/50 text-blue-600 rounded-xl">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#0c1736] tracking-tight">AI Workflow Assistant</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Always active</p>
                  </div>
                </div>
              </div>

              {/* Chat Area */}

              <div className="h-[280px] md:h-[320px] p-4 md:p-5 flex flex-col gap-4 overflow-hidden relative bg-slate-50/30">
                <AnimatePresence mode="popLayout">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`flex w-full gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.sender === 'ai' && (
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100/50 border border-blue-200 flex items-center justify-center text-blue-600 mt-1">
                          <Bot size={14} />
                        </div>
                      )}
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed shadow-sm ${msg.sender === 'user'
                        ? 'bg-[#0c1736] text-white rounded-br-sm'
                        : 'bg-white border border-slate-100 text-slate-700 rounded-bl-sm'
                        }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {messages.length > 0 && messages.length < 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex w-full justify-start mt-1 gap-2"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100/50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Fake Input Box */}
              <div className="px-4 py-3 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-full pl-4 pr-1.5 py-1.5">
                  <span className="text-xs text-slate-400 font-medium">Message AI Assistant...</span>
                  <div className="p-1.5 bg-[#0c1736] rounded-full text-white shadow-md">
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating AI Cards */}

            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                className={`absolute z-30 w-[150px] sm:w-[170px] md:w-[220px] rounded-2xl md:rounded-3xl border ${tool.border} bg-white/90 bg-gradient-to-br ${tool.color} p-3 md:p-4 shadow-xl backdrop-blur-2xl ${tool.position}`}
                style={{
                  animationDuration: `${5 + index}s`,
                }}
              >
                {/* Icon */}

                <div
                  className={`absolute top-3 right-3 md:top-4 md:right-4 flex items-center justify-center ${tool.iconColor}`}
                >
                  {React.cloneElement(tool.icon, { className: "w-5 h-5 md:w-7 md:h-7 object-contain mix-blend-multiply" })}
                </div>

                {/* Content */}

                <div className="text-[14px] md:text-[17px] font-bold text-[#0c1736] tracking-tight leading-tight pr-8 md:pr-10">
                  {tool.title}
                </div>

                <p className="mt-1.5 md:mt-2 text-[9.5px] sm:text-[11px] md:text-[13px] leading-[1.3] md:leading-relaxed text-slate-600">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

