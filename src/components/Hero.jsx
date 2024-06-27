import React, { useEffect, useState } from 'react';
import hero from '../assets/images/profile.jpeg';

const Hero = () => {
  const social_media = [
    { iconurl: 'logo-github', link: 'https://github.com/Kavya-2023' },
    { iconurl: 'logo-linkedin', link: 'https://www.linkedin.com/in/varanasi-kavya' },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-gray-900">
      <div className={`flex-1 flex items-center justify-center h-full lg:m-20 md:m-0 sm:m-0 transition-transform duration-1000 ease-in-out transform ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={hero} alt="Profile" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className={`flex-1 relative overflow-hidden transition-transform duration-1000 ease-in-out transform ${animate ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-3xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-5xl text-4xl">Hello!<br /></span>
            <p className="text-4xl">My Name is <span className="text-cyan-600">Kavya Varanasi</span></p>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <a href="https://drive.google.com/file/d/1_64D_O7mGUcqICK8tjMrxCGUPtrNcDci/view?usp=sharin">
  <button className="btn-primary mt-8 bg-blue-500 hover:bg-blue-600 hover:brightness-110">Download CV</button>
</a>

          
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((icon, i) => (
              <div key={i} className="text-gray-600 hover:text-white cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-125">
                <a href={icon.link}>
                  <ion-icon name={icon.iconurl}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
