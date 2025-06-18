export default function Page({heading, text, image, alt, reverse}) {
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
            <div className="
                border border-red-500
                relative w-full
                md:w-1/2  p-3"
            >
                <img
                    className="border border-red-500"
                    src={image}
                    alt={alt}
                    width={800}
                    height={600}
                />
            </div>

            <div className="
                border border-red-500
                flex flex-col
                justify-center
                w-full
                text-center"
            >
                <h3 className="border border-red-500 text-2xl font-bold mb-3">{heading}</h3>
                <p className="border border-red-500 text-lg leading-relaxed">{text}</p>
            </div>
        </div>
    );
}