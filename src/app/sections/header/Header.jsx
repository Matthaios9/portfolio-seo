"use client";
import { useEffect } from "react";
import Image from "next/image";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    // updated header
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <Image
            src={"/assets/cv_picture.jpg"}
            width="200"
            height="150"
            alt="Header Portait"
          />
        </div>
        <h3 data-aos="fade-up">
          Welcome to the Portfolio Showcase of Mattheos Tasios{" "}
        </h3>
        <p data-aos="fade-up">
          Hello and welcome to my personal corner of the digital universe! I am
          Mattheos Tasios, a passionate Java and JavaScript developer with a
          love for turning lines of code into captivating web experiences. Here,
          I invite you to explore my journey, projects, and the world of
          innovation that I&apos;ve crafted using the power of these two dynamic
          technologies. Let&apos;s collaborate and turn your ideas into digital
          realities.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let&apos;s Talk
          </a>
          <a href="#portfolio" className="btn ">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
