import React from "react";

import SocialLinks from "app/components/SocialLinks";
import Typewriter from "typewriter-effect";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { typewriterText } from "lib/iterables";

const Welcome = () => {
  return (
    <>
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
                typewriter
                  .typeString("Omar")
                  .pauseFor(4500)
                  .deleteAll()
                  .start();
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
          I'm Omar, an Engineering student at the University of Waterloo, with 
          a Minor in Computing, passionate about building data-driven products and 
          systems, and leading impactful projects.
          <br /><br />
          I'm deeply interested in the intersection of data, product and project 
          strategy, and operations. With a background in engineering and hands-on 
          experience leading cross-functional teams, I enjoy turning ambiguity into 
          actionable plans and products and driving them through to tangible results.
        </p>
        <p className="text-dark-600 dark:text-dark-300 mb-4">
          When I'm not working, you can find me exploring new hiking trails,
          trying out new recipes in the kitchen, or playing board games with
          friends and family. Welcome to my corner of the internet!
        </p>
        <SocialLinks />
      </section>
      <span
        className="hidden md:flex relative min-w-full bottom-[-2.5rem] inset-x-0 justify-center animate-bounce text-3xl h-6 w-6 cursor-pointer"
        onClick={() =>
          window.scrollBy({
            left: 0,
            top: 0.85 * window.innerHeight,
            behavior: "smooth",
          })
        }
      >
        <MdKeyboardDoubleArrowDown />
      </span>
    </>
  );
};

export default Welcome;
