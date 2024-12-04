"use client";
import "./globals.css";
import Prev from "./(components)/back";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const handleTitle = () => {
    const newTitle = pathname
      .replace(/[/-]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return pathname === "/" ? "Challenges" : `${newTitle} | Challenges`;
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest/manifest.json" />
        <meta
          name="description"
          content="A collection of challenges by Jaden"
        />
        <title>{handleTitle()}</title>
      </head>
      <body>
        {pathname !== "/" && <Prev />}
        {children}
      </body>
    </html>
  );
}
