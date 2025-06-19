"use client"
import { useEffect, useState } from "react";

export default function Sidebar() {
    const sections = ["about", "literature", "activities", "inspirations", "closing"];
    const [labelOffsets, setLabelOffsets] = useState([]);

    useEffect(() => {
        const updatePositions = () => {
            const positions = sections.map((id) => {
                const el = document.getElementById(id);
                if (!el) return 0;
                const rect = el.getBoundingClientRect();
                return rect.top + window.scrollY;
            });

            const totalHeight = positions[positions.length - 1] - positions[0];
            const relativeOffsets = positions.map(pos => ((pos - positions[0]) / totalHeight) * 100);
            setLabelOffsets(relativeOffsets);
        };

        updatePositions();

        window.addEventListener("resize", updatePositions);
        window.addEventListener("load", updatePositions);

        return () => {
            window.removeEventListener("resize", updatePositions);
            window.removeEventListener("load", updatePositions);
        };
    }, []);

    return (
        <nav className="
            z-1
            border border-red-500
            fixed flex items-center
            left-6 top-1/2 -translate-y-1/2 h-2/3
            "
        >
            <ul className="absolute left-5 h-full text-sm">
                {sections.map((id, i) => (
                    <li key={id}
                        style={{
                            position: 'absolute',
                            top: `${labelOffsets[i] ?? 0}%`,
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <a href={`#${id}`} className="hover:underline">
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
