export default function Chapter({title, text}) {
    return (
        <section
            id={title}
            className="
            border border-red-500
            min-h-screen
            relative bg-[#fdf6e3]
            flex flex-col justify-center items-center text-center
            "
        >
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-5">{title}</h2>
                <p className="text-lg italic text-gray-500 px-20">{text}</p>
            </div>
        </section>
    );
}