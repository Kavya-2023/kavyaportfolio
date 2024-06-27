import React from "react";
import { FaBootstrap,FaReact,FaHtml5,FaCss3Alt  } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
const Skills = () => {
  const skills = [
    {
      logo: FaHtml5,
      name:"HTML5"
    },
    {
      logo: FaCss3Alt,
      name:"CSS3"
    },
    {
      logo:DiNodejs,
      name:"NodeJS"
    },
    {
      logo:FaReact,
      name:"ReactJS"
    },
    {
      logo:FaBootstrap,
      name:"Bootstrap5"
    },
    {
      logo:SiExpress,
      name:"ExpressJS"
    },
    {
      logo:RiTailwindCssFill,
      name:"TailWindCss"
    },
    {
      logo:IoLogoJavascript,
      name:"JavaScript"
    }
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
               <div className="flex-col text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600" key={i}>
                  <skill.logo />
                  <p className="text-cyan-400 text-sm">{skill.name}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
