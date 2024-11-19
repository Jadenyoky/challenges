import "./globals.css";
import Prev from "./back";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges",
  description: "A collection of challenges by Jaden",
  manifest: "/manifest/manifest.json",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {/* {pathname !== "/" && <Prev />} */}
        <Prev />
        {children}
      </body>
    </html>
  );
}
