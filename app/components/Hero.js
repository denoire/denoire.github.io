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

            <div className="mt-10 mb-2 flex">
                <a
                    href="#about"
                    className="
                        bg-amber-300
                        hover:bg-amber-500
                        text-lg
                        py-2 px-5
                        rounded-full
                        shadow transition"
                >
                    Start Reading
                </a>
            </div>

            <Image
                src="/images/book.png"
                alt="open book & glasses"
                width={700}
                height={700}
                className="p-10"
            />
        </section>
    );
}
