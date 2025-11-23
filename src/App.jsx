import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import OtherExperience from "./components/sections/OtherExperience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-sky-500/30 dark:bg-slate-950 dark:text-slate-100">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e0f2fe,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#0f172a,transparent)]" />
      </div>
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-5xl px-6 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
          <div className="space-y-12 sm:space-y-20">
            <Hero />
            <div className="space-y-12 sm:space-y-20">
              <Education />
              <Experience />
              <OtherExperience />
              <Projects />
              <Skills />
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
