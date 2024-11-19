"use client";
import "./globals.css";
import Back from "./back";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {pathname !== "/" && <Back />}
        {children}
      </body>
    </html>
  );
}
