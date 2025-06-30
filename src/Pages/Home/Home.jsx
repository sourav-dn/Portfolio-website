// import Banner from "../Banner/Banner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Eduction from "../Education/Eduction";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Hero from "../Banner/Hero";

const Home = () => {
  return (
    <div className="bg-[#1a0e2a]">
      <section id="home">
        {/* <Banner /> */}
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Eduction />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
