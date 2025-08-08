import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HeroSection from "./pages/HeroSection"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills/Skills"

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}