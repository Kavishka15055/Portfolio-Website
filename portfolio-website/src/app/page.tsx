import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero/>
      </section>
      <About/>
      <Skills/>
      <Projects/>
      <section id="contact" className="min-h-screen py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
          <p className="text-center text-gray-600">Contact section coming soon...</p>
        </div>
      </section>
    </>
  );
}