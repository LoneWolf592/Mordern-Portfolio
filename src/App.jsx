import { Navbar} from "@/Layout/Navbar";
import { Hero } from "@/Sections/Hero";
import { About } from "@/Sections/About";
import { Projects } from "@/Sections/Projects";
import { Experience } from "@/Sections/Experience";
import { Testimonals } from "@/Sections/Testimonals";
import { Contact } from "@/Sections/Contact";


function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonals />
      <Contact />

    </main>

  </div>
}

export default App
