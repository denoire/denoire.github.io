import Sidebar from './components/Sidebar.js';
import Hero from './components/Hero.js';
import About from "./components/About";
import Section from "./components/Section.js";
import Closing from "./components/Closing.js";
import Divider from "./components/Divider.js";
import Chapter from "./components/Chapter";
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
              <Section id="1" />
              <Divider />

              <Chapter
                  title="Activities"
                  text="Simplicity and depth aren’t mutually exclusive. I prefer things that are steady and undemanding;
                   they never ask ask for justification, and they don’t require urgency to feel important. They aren’t
                   rituals in the strict sense. They tend to come around on their own terms—unplanned, unannounced.
                   Random, maybe, but not unwelcome. These are the activities I trust to keep me untethered in life."
              />
              <Section id="2" />
              <Divider />

              <Chapter
                  title="Inspirations"
                  text="This is asection for what inspires me deeply. It runs a little longer, but that feels fair;
                  things that matter tend to unfold slowly."
              />
              <Section id="3" />
              <Divider />

              <Closing />
          </main>
      </div>
  );
}
