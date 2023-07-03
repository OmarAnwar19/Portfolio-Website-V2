import React from "react";

import SocialLinks from "app/components/SocialLinks";
import Typewriter from "typewriter-effect";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { typewriterText } from "lib/iterables";

const Welcome = () => {
  return (
    <section
      className="flex flex-col justify-center h-[67vh]"
      data-aos="fade-in"
    >
      <h1 className="flex flex-row items-center font-bold text-4xl mb-8 tracking-tight">
        Hey, I'm&nbsp;
        <span className="hidden md:block">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter.typeString("Omar").pauseFor(3500).deleteAll().start();
              {
                typewriterText.map((text) => {
                  typewriter
                    .typeString(`a ${text}`)
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                });
              }
            }}
          />
        </span>
        <span className="block md:hidden">Omar</span>
        &nbsp;👋
      </h1>
      {/* <h1 className="block md:hidden text-2xl text-dark-600 dark:text-dark-300 mb-4 underline">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            {
              typewriterText.map((text) => {
                typewriter.typeString(text).pauseFor(2000).deleteAll().start();
              });
            }
          }}
        />
      </h1> */}
      <p className="text-dark-600 dark:text-dark-300 mb-4">
        I'm Omar Anwar, a passionate developer and student, with particular
        expertise in full stack development and data science. I am always eager
        to learn and explore new technologies and tools that can enhance my
        work. I also have a keen interest in the business side of tech!
      </p>
      <p className="text-dark-600 dark:text-dark-300 mb-4">
        When I'm not working, you can find me exploring new hiking trails,
        trying out new recipes in the kitchen, or playing board games with
        friends and family. Welcome to my portfolio!
      </p>
      <SocialLinks />
      <span
        className="hidden md:flex absolute min-w-full bottom-10 inset-x-0 justify-center animate-bounce text-3xl h-6 w-6 cursor-pointer"
        onClick={() =>
          window.scrollBy({ left: 0, top: 700, behavior: "smooth" })
        }
      >
        <MdKeyboardDoubleArrowDown />
      </span>
    </section>
  );
};

export default Welcome;
