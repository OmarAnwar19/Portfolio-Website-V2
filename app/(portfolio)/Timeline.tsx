import React from "react";
import { experiences } from "lib/iterables";
import Image from "next/image";

const Timeline = () => {
  return (
    <section className="mt-[5rem]" data-aos="fade-up">
      <h1 className="font-bold text-2xl mb-8 tracking-tight">Experience</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((item, i) => (
          <li className="mb-10 ml-4" key={`item-${i}`} data-aos="fade-up">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
              {item.date}
            </time>
            <div className="flex flex-col md:flex-row mt-2 items-start md:items-center justify-between gap-2">
              <span className="flex flex-row justify-between items-center gap-2">
                <Image
                  alt={`${item.company} logo`}
                  width={35}
                  height={35}
                  className="rounded"
                  src={item.logo}
                />
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.company}
                </p>
              </span>
              <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-400">
                {item.role}
              </p>
            </div>
            <p className="hidden sm:block text-base font-normal mt-2 text-gray-500 dark:text-gray-400">
              {item.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
