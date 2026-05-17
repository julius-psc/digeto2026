import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digeto - Global GTM Engine",
  description: "AI-powered global growth engine enabling innovative and impactful companies to scale internationally.",
  icons: {
    icon: "/assets/brand/digeto-fav-dark.svg",
    shortcut: "/assets/brand/digeto-fav-dark.svg",
    apple: "/assets/brand/digeto-fav-dark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
