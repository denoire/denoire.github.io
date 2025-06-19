"use client"
import {useEffect, useRef, useState} from "react";

export default function Sidebar() {
    const sections = ["about", "literature", "activities", "inspirations", "closing"];
    const [labelOffsets, setLabelOffsets] = useState([]);
    const dotRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const updateLabelOffsets = () => {
            const positions = sections.map((id) => {
                const element = document.getElementById(id);
                return element ? element.offsetTop : 0;
            });

            const containerHeight = document.documentElement.scrollHeight - window.innerHeight;
            const offsets = positions.map(pos => (pos / containerHeight) * 100);
            setLabelOffsets(offsets);
        };

        updateLabelOffsets();
        window.addEventListener("resize", updateLabelOffsets);
        window.addEventListener("load", updateLabelOffsets);
        return () => {
            window.removeEventListener("resize", updateLabelOffsets);
            window.removeEventListener("load", updateLabelOffsets);
        };
    }, []);

    useEffect(() => {
        let frameId;
        const animateDot = () => {
            const sectionElements = sections.map((id) => document.getElementById(id));
            let newActiveIndex = 0;

            for (let i = 0; i < sectionElements.length; i++) {
                const element = sectionElements[i];
                if (!element) continue;

                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.3) newActiveIndex = i;
            }

            setActiveIndex(newActiveIndex);
            const positions = sectionElements.map((el) => el?.offsetTop ?? 0);
            const scrollY = window.scrollY;

            let i = 0;
            while (i < positions.length - 1 && scrollY > positions[i + 1]) i++;

            const start = positions[i];
            const end = positions[i + 1] ?? start
            const ratio = end === start ? 0 : (scrollY - start) / (end - start);
            const startPercent = labelOffsets[i] ?? 0;
            const endPercent = labelOffsets[i + 1] ?? startPercent;
            const topPercent = startPercent + (endPercent - startPercent) * ratio;

            if (dotRef.current) dotRef.current.style.top = `${topPercent}%`;
            frameId = requestAnimationFrame(animateDot);
        };

        frameId = requestAnimationFrame(animateDot);
        return () => cancelAnimationFrame(frameId);
    }, [labelOffsets]);

    return (
        <nav className="
            fixed flex flex-col items-center z-1
            left-14 top-1/2 -translate-y-5/11 h-2/3"
        >
            <a href="#hero" className="absolute w-25 -top-30 left-1/2 -translate-x-1/2">
                <img
                    src="/images/corridor-of-memories.png"
                    alt="Corridor of Memories"
                    className="cursor-pointer hover:scale-105 transition-transform"
                />

            </a>
            <div
                className="relative h-full w-1 bg-black rounded-t-full"
            >
                {labelOffsets.map((offset, i) => (
                    <div
                        key={`tick-${i}`}
                        className="absolute left-1/2 -translate-x-1/2 bg-black"
                        style={{
                            top: `${offset}%`,
                            width: "12px",
                            height: "2px",
                        }}
                    />
                ))}

                <div
                    ref={dotRef}
                    className="absolute w-4 h-4 border-2  bg-white rounded-full"
                    style={{transform: "translate(-35%)"}}
                />
                <ul className="absolute left-5 h-full text-sm">
                    {sections.map((id, i) => (
                        <li key={id}
                            style={{
                                position: 'absolute',
                                top: `${labelOffsets[i] || 0}%`,
                                transform: 'translateY(-40%)',
                            }}
                        >
                            <a href={`#${id}`}
                               className={`
                                    block px-2 py-1 rounded hover:underline
                                    transition-all duration-300 ease-in-out 
                                    ${i === activeIndex ? "text-yellow-400 font-bold opacity-100" 
                                                        : "text-black opacity-40"}`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
