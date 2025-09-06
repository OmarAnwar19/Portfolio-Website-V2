import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="mt-10">
      <hr />
      <div className="w-full mx-auto max-w-screen-xl px-4 flex items-center justify-between">
        <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
          Omar Anwar, 2023-2026
        </span>
        <ul className="flex flex-wrap items-center m-0 text-sm font-medium text-gray-600 dark:text-gray-400">
          <SocialLinks showNames={false} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
