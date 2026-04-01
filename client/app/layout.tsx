import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Digeto",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full bg-[#0a0a0c] antialiased",
        inter.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0c] font-sans text-neutral-100">
        {children}
      </body>
    </html>
  );
}
