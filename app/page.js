import Sidebar from './components/Sidebar.js';
import Hero from './components/Hero.js';
import About from "./components/About";
import Section from "./components/Section.js";
import Closing from "./components/Closing.js";
import Divider from "./components/Divider.js";

export default function Home() {
  return (
      <div className="font-[Patrick_Hand]">
          <Sidebar />
          <main className="relative pl-45 p-3 w-full">
              <Hero />
              <Divider />

              <About />
              <Divider />

              <Section id="1" />
              <Divider />

              <Section id="2" />
              <Divider />

              <Section id="3" />
              <Divider />

              <Closing />
          </main>
      </div>
  );
}
