import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Digeto | Global GTM Engine",
  description:
    "Digeto builds and operates global sales infrastructure for tech companies: AI-powered GTM execution from India, paired with regional teams that convert on the ground.",
  icons: {
    icon: "/assets/brand/digeto-fav.svg",
    shortcut: "/assets/brand/digeto-fav.svg",
    apple: "/assets/brand/digeto-fav.svg",
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
      className={cn(
        "dark h-full bg-[#0a0a0c] antialiased",
        poppins.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0c] font-sans text-neutral-100">
        {children}
      </body>
    </html>
  );
}
