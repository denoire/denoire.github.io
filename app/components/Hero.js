import Image from 'next/image';
import React from "react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="
            border border-red-500
            min-h-screen
            flex flex-col justify-center items-center text-center
            "
        >
            <h1 className="text-5xl mb-3">Thomas&apos; Personal Pages</h1>
            <p className="italic">
                A small archive of things that matter
            </p>
        </section>
);
}
