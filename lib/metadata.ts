import type { Metadata } from "next";

export const portfolioMetadata: Metadata = {
  metadataBase: new URL("https://omaranwar.me"),
  title: {
    default: "Omar Anwar",
    template: "%s | Omar Anwar",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Omar Anwar",
    description: "Developer, writer, and creator.",
    url: "https://omaranwar.me",
    siteName: "Omar Anwar",
    locale: "en-US",
    type: "website",
  },
};

export const blogMetadata: Metadata = {
  title: "Blog",
  description: "Read my blog!",
};
