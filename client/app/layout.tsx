import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digeto",
  description: "Scale your sales globally. No hiring required.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
