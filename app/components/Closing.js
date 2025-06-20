export default function Closing() {
    return (
        <section
            id="closing"
            className="
            border border-red-500
            min-h-screen
            flex flex-col justify-center items-center text-center
            "
            style={{
                backgroundImage: `
                    radial-gradient(
                    circle at 50% 30%,
                    rgba(0, 0, 0, 0) 15%,
                    rgba(0, 0, 0, 0.1) 25%,
                    rgba(0, 0, 0, 0.15) 35%,
                    rgba(0, 0, 0, 0.3) 50%
                    ),
                    url('/images/closed-memory-book.png')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingTop: '30vh',
            }}
        >
            <div className="max-w-xl absolute mb-[60vh]">
                <h2 className="text-[#f0e8db] text-5xl font-bold mb-5">Until Next Time</h2>
                <p className="text-[#f0e8db] text-lg leading-relaxed mb-3">
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
            </div>
        </section>
    );
}
