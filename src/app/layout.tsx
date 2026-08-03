import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Cyber Battalion — Dr. Sara Shuttari";
const description =
  "Cybersecurity & Information Technology Professional. Knowledge, Awareness, Protection.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyberbetallion.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
