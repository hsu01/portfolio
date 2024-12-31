import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import About from "./About";
import Navbar from "./navbar";
import Job from "./Job";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (ms)
      once: true, // Animate only once when scrolling
    });
  }, []);

  return (
    <div>
       <Navbar />
       <About />
       <Job />
       <Education />
       <Projects />
       <Contact />



  </div>
  );
}

export default App;
