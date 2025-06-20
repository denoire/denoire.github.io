import Sidebar from './components/Sidebar.js';
import Hero from './components/Hero.js';
import About from "./components/About";
import Closing from "./components/Closing.js";
import Divider from "./components/Divider.js";
import Chapter from "./components/Chapter";
import Page from "./components/Page.js";
import CustomLink    from "./components/CustomLink";
import Subdivider from "./components/Subdivider";

export default function Home() {
    return (
        <div className="font-[Patrick_Hand]">
            <Sidebar />
            <main className="relative pl-45 p-3 w-full">
                <Hero />
                <Divider />
                <About />

                <Divider />
                <Chapter
                    title="Literature"
                    text="I’ve always paid attention to the architecture of thought. Writing is an abstraction of the
                    mind—a deliberate act of selection. And like any structure built under tension, sentences are fragile
                    by design; a single imbalances echoes through the rest. Even now, I read like a writer and write like
                    a reader, because I admire literature that reads like thought and moves with a certain intimacy. I’m
                    drawn to pieces that slow me down and leaves space for silence, for doubt. I don’t mind when a text
                    asks more questions than it answers, or if its beauty lies in the stillness of reflection. I find that
                    quite elegant. Here are some such pieces that I find myself returning to."
                />
                <Divider />

                <Page
                    heading="The Stranger"
                    image="images/stranger.jpg"
                    alt="Cover of The Stranger by Albert Camus"
                >
                    The{' '}
                    <CustomLink
                        href="https://www.slps.org/site/handlers/filedownload.ashx?moduleinstanceid=27607&dataid=78367&FileName=The%20Stranger%20-%20Albert%20Camus.pdf"
                        text="Stranger"
                    />{' '} is a novel that follows a man who seems unusually detached from the world around him,
                    responding to major events with striking emotional indifference. His behaviour feels strange at first,
                    but as the story unfolds, that emptiness becomes harder to ignore and begins to unsettle the reader in
                    a more personal way. It leaves you questioning not just him but ourselves; why we need emotion to follow
                    a script, why we rely on others to affirm that life has meaning, and what it says about us when they don’t.
                    I think Albert Camus is quite interesting. I might also recommend{' '}
                    <CustomLink
                        href="https://www2.hawaii.edu/~freeman/courses/phil360/16.f"
                        text="The Myth of Sisyphus"
                    />{' '}
                    though it can be a tougher read.
                </Page>

                <Subdivider />

                <Page
                    heading="Elegy Written in a Country Churchyard"
                    image="images/elegy.jpeg"
                    alt="Antique printed page of Elegy Written in a Country Churchyard by Thomas Gray"
                    reverse
                >
                    This poem is quiet reflection on the lives of forgotten villagers buried in a country graveyard.
                    It’s a gentle meditation on death, memory, and the value of those who pass without recognition.
                    There’s a well known anecdote that on the eve of the Battle of the Plains of Abraham (during the Seven
                    Years’ War), British General James Wolfe read the poem aloud to his officers. After reading it, he
                    reportedly said: “Gentlemen, I would rather have written that poem than take Quebec tomorrow.”
                    I think it’s quite an interesting addition to the poem’s lore. You can find the poem{' '}
                    <CustomLink
                        href="https://www.poetryfoundation.org/poems/44299/elegy-written-in-a-country-churchyard"
                        text="here"
                    />, and if you&apos;re finding old English hard to dissect, a{' '}
                    <CustomLink
                        href="https://www.litcharts.com/poetry/thomas-gray/elegy-written-in-a-country-churchyard"
                        text="rough translation"
                    />{' '}may help.
                </Page>

                <Divider />
                <Chapter
                    title="Activities"
                    text="Simplicity and depth aren’t mutually exclusive. I prefer things that are steady and undemanding;
                    they never ask ask for justification, and they don’t require urgency to feel important. They aren’t
                    rituals in the strict sense. They tend to come around on their own terms—unplanned, unannounced.
                    Random, maybe, but not unwelcome. These are the activities I trust to keep me untethered in life."
                />
                <Divider />

                <Page
                    heading="Swimming"
                    image="images/ladner-leisure-center.jpg"
                    alt="Entrance to Ladner Leisure Centre, familiar and unchanged over the years"
                    reverse
                >
                    I’m not sure I could explain it in a way that would make sense to anyone else, but{' '}
                    <CustomLink
                        href="https://www.delta.ca/parks-recreation/sports-activities/programs-registration/aquatics"
                        text="Ladner Leisure Center"
                    />{' '}
                    feels frozen in time. And it isn’t just the faded tiles or the scent of chlorine—it’s like stepping
                    back into a memory that never fully left. I often enjoy swimming as a workout that doesn’t ask for too
                    much, but it’s never just about exercise. I’ve tried other places, but they always feel like they’re
                    meant for someone else. This one gives me a space that always feels the same, no matter what&apos;s
                    going on outside.
                </Page>

                <Subdivider />

                <Page
                    heading="Tea"
                    image="images/tea.jpg"
                    alt="A teacup and teapot on a tray outdoors, with a soft sunset and distant view beyond the trees"
                >
                    These days, tea is more of a ritual than a beverage. Good tea begins with a moment—the choice to
                    slow down. It starts when you make space for it, both physically and mentally. It’s a state of mind.
                    There’s something almost sacred about the tranquility that surrounds a late afternoon cup. But tea
                    isn’t always slow or solitary; some cups arrive earlier. Green tea, for instance, often accompanies
                    a productive morning. And other cups are brewed in borrowed spaces;{' '}
                    <CustomLink
                        href="https://www.lapetitecuillere.ca/"
                        text="La Petite Cuillère"
                    />{' '}
                    is one that’s worth a visit.
                </Page>

                <Divider />
                <Chapter
                    title="Inspirations"
                    text="This is a section for what inspires me deeply. It runs a little longer, but that feels fair;
                    things that matter tend to unfold slowly."
                />
                <Divider />

                <Page
                    heading="Paul Erdős"
                    alt="Paul Erdős in late life, wearing a suit and glasses, standing indoors with his hands folded behind him"
                    image="images/paul-erdos.jpg"
                >
                    Paul Erdős was a Hungarian mathematician renowned for his extensive contributions to number theory,
                    combinatorics, graph theory, and probability. Over his lifetime, he published over 1,500 papers in
                    collaboration with more than 500 mathematicians, living out of a suitcase and devoting nearly every
                    moment to the pursuit of mathematics. Erdős had no permanent address, no possessions, and no interest
                    in material wealth. Though he received several prestigious awards, he often gave away the prize money
                    to support students, help struggling mathematicians, or fund mathematical prizes. He once said that
                    “the purpose of life is to conjecture and prove.” To conjecture is to wonder aloud, to take risks in
                    the unknown. To prove is to follow that curiosity with discipline. For Erdős, to live fully was to hold
                    curiosity as a gift, to pursue ideas with relentless focus, and to leave the door open behind him.
                    His days were shaped by a steady devotion to work, driven by the joy of discovery. While many admire
                    Erdős for his legacy in mathematics, it’s a relatively small part of what inspires me. I like{' '}
                    <CustomLink
                        href="https://archive.nytimes.com/www.nytimes.com/books/first/h/hoffman-man.html"
                        text="this"
                    />{' '}
                    particular excerpt, as it captures many of the parts I care about. Perhaps it’s why it’s stays with
                    me longer than any list of bullet points and accolades. This site was inspired by Paul Erdős. There’s a saying:
                    it isn’t one’s reputation, but the character behind it that truly matters. In mathematics, an{' '}
                    <CustomLink
                        href="https://en.wikipedia.org/wiki/Erd%C5%91s_number"
                        text="Erdős number"
                    />{' '}
                    measures the collaborative distance between a person and Erdős himself—how many steps it takes, through
                    shared papers, to reach him. But it’s more than just a number; it’s a symbol of how ideas connect us.
                    A door works the same way. It marks a beginning, a path, a link in something larger. And no matter how
                    far you are from the source, each step forward brings you closer to something that truly matters.
                </Page>

                <Divider />
                <Closing />
            </main>
        </div>
    );
}
