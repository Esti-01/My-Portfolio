import Link from "next/link";
import Hero from "../components/HeroSection.jsx";
import Navbar from "../components/MainNavbar.jsx";
import About from "../components/AboutSection.jsx";
import Projects from "../components/ProjectsSection.jsx";
import Contact from "../components/ContactSection.jsx";

export default function Home() {
  return (
    <main className="pt-16">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
