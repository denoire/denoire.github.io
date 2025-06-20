import CustomLink from "@/app/components/CustomLink";

export default function About({reverse}) {
    return (
        <div className="relative bg-paper shadow-sm rounded-s-md overflow-hidden">
            <div
                className={`
                    absolute top-0 h-full w-15 pointer-events-none z-[1]
                    ${reverse ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"} 
                    from-black/8 via-transparent to-transparent
                `}
            />
            <section
                id="about"
                className="min-h-screen relative bg-paper
                           flex flex-col justify-center items-center text-center"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-10">About</h2>
                        <div className="text-lg italic text-gray-500 px-30 space-y-5">
                            <p>
                                A personal website is a peculiar thing. It isn’t quite a blog, but not quite a portfolio
                                either.
                                I think of it more like a door left ajar: not expecting anyone, but quietly open to
                                visitors.
                                I never knew what to include in such a space, so I started with what I wouldn’t.
                                I’ve never cared for bullet points and projects—they’ll be available upon request.
                                The only thing you’ll find beyond this point are the things that actually matter.
                            </p>
                            <p>
                                This space reads much like a diary—a collection of memories—quietly linear but never strict.
                                You can wander through it, jump ahead, or pause wherever something stirs you.
                                Memories work the same way—like doors you pass without noticing, until one day you remember
                                them and wonder what was behind. Even when closed, a{' '}
                                <CustomLink
                                    closed
                                    href="#"
                                    text="door"
                                    bubbleText="A door to an external page, otherwise known as a hyperlink.
                                    This particular one is closed."
                                />{' '}
                                suggests that something lies beyond.
                                They aren’t meant to guide, but to resurface unexpectedly, the way memory does.
                            </p>
                            <p>
                                Nothing here insists on being followed, but in case you felt like stepping through,
                                the doors remain ajar.
                            </p>
                        </div>
                </div>
            </section>
        </div>
    );
}