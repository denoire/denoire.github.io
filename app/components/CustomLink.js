"use client"
import { useState } from 'react';

function CustomLink({ text, href, bubbleText, closed}) {
    const [hovering, setHovering] = useState(false);
    return (
        <span
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="
                relative
                cursor-pointer
                underline
                decoration-double
                decoration-yellow-400
                underline-offset-2
                bg-yellow-200
                transition
                duration-900"
        >
            {closed && (<a href={"#about"}>{text}</a>)}
            {!closed && (<a href={href} target="_blank" >{text}</a>)}
            {hovering && bubbleText && (
                <span className="
                    absolute
                    bottom-full left-1/2 -translate-x-1/2
                    border border-gray-300
                    rounded-lg bg-white shadow-md
                    px-3 py-2 mb-2 w-[20vw]
                    text-sm text-gray-600">
                    {bubbleText}
                </span>
            )}
        </span>
    );
}

export default CustomLink;
