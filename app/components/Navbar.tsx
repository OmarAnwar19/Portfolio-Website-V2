"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { LayoutGroup, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { resumeLinkTreeLink } from "lib/iterables";
const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/resume": {
    name: "resume",
  },
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-center justify-between items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path == "/resume" ? resumeLinkTreeLink : path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive,
                      }
                    )}
                  >
                    <span className="relative py-1 px-2">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
            {mounted && (
              <button
                className="relative py-1 px-2 text-xl"
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                {theme === "light" ? <MdOutlineDarkMode /> : <MdDarkMode />}
              </button>
            )}
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
};

export default Navbar;