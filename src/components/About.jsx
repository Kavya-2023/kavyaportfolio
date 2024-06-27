import React, { useEffect } from "react";
import aboutImg from "../assets/images/profile.jpeg";
import "./About.css"; 

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const onScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        
        aboutSection.classList.add("about-visible");
      } else {
       
        aboutSection.classList.remove("about-visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi, I'm Kavya, a Computer Science graduate with a passion for technology and problem-solving. I specialize in creating websites and handling backend data management. My internships have honed my skills in both frontend and backend development. I'm dedicated to delivering seamless user experiences and building robust systems. Excited to contribute to impactful projects and continuously learn in the tech field.
              </p>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1_64D_O7mGUcqICK8tjMrxCGUPtrNcDci/view?usp=sharin" download>
                <button className="w-fit bg-cyan-600 font-semibold text-white md:mx-auto rounded-full py-3 px-6 flex items-center gap-2 cursor-pointer hover:bg-cyan-700">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center about-img-container">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm about-img">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
