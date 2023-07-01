import clsx from "clsx";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import NightSky from "./components/NightSky";
import { portfolioMetadata } from "lib/metadata";
import { graphik } from "styles/fonts";
import "../styles/global.css";

export const metadata: Metadata = portfolioMetadata;
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        graphik.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 z-0">
          <NightSky />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
