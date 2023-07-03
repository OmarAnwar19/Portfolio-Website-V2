import clsx from "clsx";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import NightSky from "./components/NightSky";
import { portfolioMetadata } from "lib/metadata";
import { Providers } from "../utils/providers";
import { graphik } from "styles/fonts";
import "../styles/global.css";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata: Metadata = portfolioMetadata;
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={clsx("dark", graphik.variable)}>
      <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 md:mx-auto">
        <main className="flex-auto min-w-0 mt-6 mb-20 flex flex-col px-2 md:px-0 z-0 overflow-x-hidden">
          <Providers>
            <Navbar />
            <NightSky />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
