import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

const Contact = () => {
  const contact_info = [
    { icon: <AiOutlineMail className="text-white text-3xl bg-cyan-600 rounded-full p-2" />, text: "varanasikavya0@gmail.com" },
    { icon: <AiOutlineWhatsApp className="text-white text-3xl bg-cyan-600 rounded-full p-2" />, text: "6300106993" },
  ];
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vgcfbjj', 'template_y1s17az', form.current, '0HvSDWJLCdp5cE88n')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('FAILED... ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="user_name" required className="bg-gray-700 outline-none rounded-lg p-3 text-gray-100" />
            <input type="email" placeholder="Your Email Address" name="user_email" required className="bg-gray-700 outline-none rounded-lg p-3 text-gray-100" />
            <textarea placeholder="Your Message" rows={10} name="user_message" required className="bg-gray-700 outline-none rounded-lg p-3 text-gray-100"></textarea>
            <input value="Send Message" type="submit" className="btn-primary w-fit bg-cyan-600 font-semibold text-white md:mx-auto rounded-full py-3 px-6 flex items-center gap-2 cursor-pointer hover:bg-cyan-700" />
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div key={i} className="flex flex-row text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  {contact.icon}
                </div>
                <p className="md:text-base text-sm break-words text-gray-100">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
