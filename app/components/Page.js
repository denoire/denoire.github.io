export default function Page({heading, children, image, alt, reverse}) {
    return (
        <div
            id={heading.toLowerCase()}
            className={`
                ${reverse ? "md:flex-row-reverse" : ""}
                md:flex-row items-center 
                flex flex-col 
                border border-red-500
                min-h-screen
            `}
        >
            <div className="relative w-full md:w-1/2  p-3">
                <img
                    src={image}
                    alt={alt}
                    width={800}
                    height={600}
                />
            </div>

            <div className="
                flex flex-col
                justify-center
                w-full
                text-center"
            >
                <h3 className="text-2xl font-bold mb-3">{heading}</h3>
                <p className="text-lg leading-relaxed">{children}</p>
            </div>
        </div>
    );
}