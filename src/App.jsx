import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import OtherExperience from "./OtherExperience";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:pt-12">
        <Hero />
        <Education />
        <Experience />
        <OtherExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
