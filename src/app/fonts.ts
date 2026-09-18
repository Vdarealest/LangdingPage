import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const fontClassName = `${beVietnamPro.variable} ${playfairDisplay.variable} h-full antialiased`;
