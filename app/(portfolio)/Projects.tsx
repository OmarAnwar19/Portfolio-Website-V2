import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";

const Projects = () => {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 mt-[5rem] tracking-tighter">
        Projects
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 ${
              i === 0 || i === 3 ? "col-span-2" : "sm:"
            }`}
          >
            <div className="p-6 h-[100%] bg-white border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Name
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis similique et suscipit nam magni quibusdam dolor minima
                laborum incidunt nostrum tempora ratione qui consectetur.
              </p>

              <ul className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  <a
                    className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="#"
                  >
                    <p className="font-bold text-2xl h-4">
                      <BiCodeAlt />
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="#"
                  >
                    <p className="font-bold text-2xl h-4">
                      <MdOpenInNew />
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
