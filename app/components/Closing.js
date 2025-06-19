export default function Closing() {
    return (
        <section
            id="closing"
            className="
            border border-red-500
            min-h-screen
            flex flex-col justify-center items-center text-center
            "
        >
            <h2 className="text-3xl font-bold mb-4">Until Next Time</h2>
            <p className="text-lg leading-relaxed mb-6">
                If you&apos;d care to return a thought, don&apos;t hesitate reach out.
            </p>
            <div className="text-md font-mono text-blue-500">
                <a
                    href="mailto:thomas.albert.brigham@gmail.com"
                    className="underline hover:text-blue-900 hover:text-[102%] transition-text duration-200"
                >
                    thomas.albert.brigham@gmail.com
                </a>
            </div>
        </section>
    );
}
