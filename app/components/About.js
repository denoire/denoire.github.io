export default function About() {
    return (
        <section
            id="about"
            className="
            border border-red-500
            min-h-screen
            relative bg-[#fdf6e3]
            flex flex-col justify-center items-center text-center
            "
        >
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-10">About</h2>
                <div className="text-lg italic text-gray-500 px-30 space-y-5">
                    <p>
                        A personal website is a peculiar thing. It’s isn’t quite a blog, but not quite a portfolio
                        either.
                        I think of it more like a door left ajar: not expecting anyone, but quietly open to visitors.
                        I never knew what to display in such a space, so I started with what I wouldn’t.
                        I’ve never cared for bullet points and projects—they’ll be available upon request.
                        The only thing you’ll find beyond this point are the things that actually matter.
                    </p>
                    <p>
                        This space reads much like a diary—a collection of memories—quietly linear but never strict.
                        You can wander through it, jump ahead, or pause wherever something stirs you.
                        Memories work the same way: like doors you pass without noticing, until one day you remember
                        them and wonder what was behind. Even when closed, a door suggests that something lies beyond.
                        If you step through, it’s because you chose to, not because you were told to.
                        In case you felt like stepping through, the doors on this site remain ajar.
                        They aren’t meant to guide, but to resurface unexpectedly, the way memory does.
                        Nothing here insists on being followed.
                    </p>
                    <p>
                        Stay a while.
                    </p>
                </div>
                <div className="mt-10">
                    - Thomas A. Brigham
                </div>
            </div>
        </section>
    );
}