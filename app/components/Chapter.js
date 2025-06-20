export default function Chapter({title, text, reverse}) {
    return (
        <div className="relative bg-paper shadow-sm rounded-s-md overflow-hidden">
            <div
                className={`
                    absolute top-0 h-full w-15 pointer-events-none z-1
                    ${reverse ? "right-0" : "left-0"}
                    bg-gradient-to-${reverse ? "l" : "r"} 
                    from-black/8 via-transparent to-transparent
                `}
            />
            <section
                id={title.toLowerCase()}
                className="min-h-screen relative bg-paper
                           flex flex-col justify-center items-center text-center"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-5">{title}</h2>
                    <p className="text-lg italic text-gray-500 px-30">{text}</p>
                </div>
            </section>
        </div>
    );
}