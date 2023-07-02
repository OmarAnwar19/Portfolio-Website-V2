import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";
import { projects } from "lib/iterables";

const Projects = () => {
  return (
    <section className="mt-[5rem]" data-aos="fade-up">
      <h1 className="font-bold text-2xl mb-8 tracking-tight">Key Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 col-span-2 ${
              [0, 3, 7].includes(i) ? "md:col-span-2" : "md:col-span-1"
            }`}
            data-aos={`${[0, 3, 7].includes(i) ? "fade-right" : "fade-left"}`}
          >
            <div className="p-6 h-[100%] bg-neutral-50 border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 rounded-lg shadow">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.desc}
              </p>

              <ul className="flex flex-row mt-8 mb-4 space-x-4 space-y-0 font-sm text-dark-600 dark:text-dark-300">
                <li>
                  <a
                    className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.ghLink}
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
                    href={project.showDemo ? project.demoLink : undefined}
                  >
                    <p
                      className={`font-bold text-2xl h-4 ${
                        !project.showDemo && "text-neutral-500"
                      }`}
                    >
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
