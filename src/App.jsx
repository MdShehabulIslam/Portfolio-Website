import { Suspense, lazy } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Loading from "./components/ui/Loading";

const Contact = lazy(() => import("./components/sections/Contact"));
const Education = lazy(() => import("./components/sections/Education"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Hero = lazy(() => import("./components/sections/Hero"));
const OtherExperience = lazy(() =>
  import("./components/sections/OtherExperience")
);
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));

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
            <Suspense fallback={<Loading />}>
              <Hero />
              <div className="space-y-12 sm:space-y-20">
                <Education />
                <Experience />
                <OtherExperience />
                <Projects />
                <Skills />
                <Contact />
              </div>
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
