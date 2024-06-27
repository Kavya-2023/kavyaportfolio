import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules'

import project1 from "../assets/images/stackoverflow.png";
import project2 from "../assets/images/qrcode.png";
import project3 from "../assets/images/nanquest.png";
import project4 from "../assets/images/todolist.png";
import project5 from "../assets/images/eazycart.png";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Stack Over Flow -clone",
      github_link: "https://github.com/Kavya-2023/stackOverFlow.git",
      live_link: "https://stellular-shortbread-fdde50.netlify.app/",
    },
    {
      img: project2,
      name: "QR code Generator",
      github_link: "https://github.com/Kavya-2023/QrCodeGenerater.git",
      live_link: "https://kavya-2023.github.io/QrCodeGenerater/",
    },
    {
      img: project3,
      name: "Nanoquest E-learning",
      github_link: "https://github.com/Kavya-2023/llp.git",
      live_link: "Nanoquesttech.in",
    },
    {
      img: project4,
      name: "Todo List",
      github_link: "https://github.com/Kavya-2023/todo_list.git",
      live_link: "https://github.com/Kavya-2023/llp.git",
    },
    {
      img: project5,
      name: "Eazy Cart ",
      github_link: "https://github.com/Kavya-2023/Eazy_cart.git",
      live_link: "",
    },
  ];
  
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt={project_info.name} className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
