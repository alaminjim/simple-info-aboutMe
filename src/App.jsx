import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/Particle";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="font-mono">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials/>
        <Contact />
        <Footer/>
      </div>
    </>
  );
}

export default App;
