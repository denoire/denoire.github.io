export default function Page({heading, children, image, alt, reverse}) {
    return (
        <div
            id={heading.toLowerCase()}
            className="relative bg-paper shadow-sm rounded-s-md overflow-hidden"
        >
            <div
                className={`
                    absolute top-0 h-full w-15 pointer-events-none z-[1]
                    ${reverse ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"} 
                    from-black/8 via-transparent to-transparent
                `}
            />
            <div
                className={`
                    ${reverse ? "" : "md:flex-row-reverse"}
                    flex flex-col md:flex-row 
                    items-center min-h-screen
                    px-20 py-5 gap-x-10 
                `}
            >
                <div className="relative w-full md:w-1/2">
                    <img
                        src={image}
                        alt={alt}
                        width={800}
                        height={600}
                    />
                </div>

                <div className="
                    w-full flex flex-col
                    justify-center text-center"
                >
                    <h3 className="text-2xl font-bold mb-3">{heading}</h3>
                    <p className="text-lg leading-relaxed">{children}</p>
                </div>
            </div>
        </div>
    );
}