"use client"
import { ChangeEvent, useState, useEffect } from "react";
import emailicon from "../constants/images";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    // Reset the data after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {

  }, []);

  return (
    <section id="contact">
      <div>
        <div>
          <h1 className="mb-10 mt-40 text-center font-bold text-4xl hover:-translate-y-1 transition-transform cursor-pointer">
            Contact Me!
            <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
          </h1>
          <div className="flex text-center items-center justify-center ">
            <div className="flex space-x-4">
              <Image
                src="/emailicon.png"
                alt=""
                width={40}
                height={40}
                className="mx-auto mb-10 rounded-full shadow-2xl"
              />
              <a
                href="mailto:gordontheprogrammer@gmail.com"
                className="font-semibold text-gray-600"
              >
                gordontheprogrammer@gmail
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 rounded w-96 mx-auto"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 rounded w-96 mx-auto"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              className="px-4 py-3 border border-gray-300 rounded w-96 mx-auto"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mx-auto text-neutral-100 font-semibold px-4 py-2 bg-blue-500 rounded shadow hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
