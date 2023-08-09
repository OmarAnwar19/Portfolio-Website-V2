import React from "react";
import { Disclosure } from "@headlessui/react";
import { experiences } from "lib/iterables";
import { MdOutlineExpandMore } from "react-icons/md";
import Image from "next/image";

const Timeline = () => {
  return (
    <section className="mt-[5rem]" data-aos="fade-up">
      <h1 className="font-bold text-2xl mb-8 tracking-tight">Experience</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((item, i) => (
          <li
            className="mb-5 ml-4 p-3 rounded-lg border-2 border-slate-400/10 bg-neutral-50/70 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800/70 hover:border-neutral-700 dark:hover:border-neutral-200 rounded-lg shadow"
            key={`item-${i}`}
            data-aos="fade-up"
          >
            <Disclosure>
              {() => (
                <>
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5" />
                  <time className="italic mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {item.date}
                  </time>
                  <Disclosure.Button className="w-full mt-1 items-start flex flex-col md:flex-row md:items-center justify-between gap-2">
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
                    <span className="w-full md:w-auto flex flex-row text-start justify-between items-center gap-2">
                      <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-400">
                        {item.role}
                      </p>
                      <p className="hidden sm:block text-lg">
                        <MdOutlineExpandMore />
                      </p>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-l-[2px] ml-[15px] pl-[15px] text-base font-normal mt-2 text-gray-500 dark:text-gray-400 border-neutral-200 dark:border-neutral-700">
                    {item.desc}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
