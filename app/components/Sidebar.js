"use client"
import {useEffect, useRef, useState} from "react";

export default function Sidebar() {
    const sections = ["about", "literature", "activities", "inspirations", "closing"];
    const [labelOffsets, setLabelOffsets] = useState([]);
    const dotRef = useRef(null);
    const containerRef = useRef(null);

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
            const scrollY = window.scrollY;
            const sectionElements = sections.map((id) => document.getElementById(id));
            const sectionOffsets = sectionElements.map((element) => element?.offsetTop ?? 0);

            let i = 0;
            while (i < sectionOffsets.length - 1 && scrollY > sectionOffsets[i + 1]) i++;

            const start = sectionOffsets[i];
            const end = sectionOffsets[i + 1] ?? start;
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
            z-1
            fixed flex items-center
            left-6 top-1/2 -translate-y-1/2 h-2/3
            "
        >
            <div
                ref={containerRef}
                className="relative h-full w-1 bg-black rounded-full"
            >
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
                                transform: 'translateY(-10%)',
                            }}
                        >
                            <a href={`#${id}`} className="hover:underline">
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
);
}
