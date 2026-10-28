import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
// @ts-ignore: Allow side-effect CSS import without type declarations
import "./globals.css";

// Display / heading font — premium, modern, strong personality
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — the industry standard for readability
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Monospace — for code/terminal elements
const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charith Katakam | AI/ML Engineer & QA Automation Engineer",
  description:
    "CSE AIML student passionate about AI, agentic workflows, and test automation.",
  keywords: [
    "Charith Katakam",
    "AI/ML Engineer",
    "QA Automation Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Test Automation",
    "Portfolio",
  ],
  authors: [{ name: "Charith Katakam" }],
  openGraph: {
    title: "Charith Katakam | AI/ML Engineer & QA Automation Engineer",
    description:
      "CSE AIML student passionate about AI, agentic workflows, and test automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5310628773356633"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${inter.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
