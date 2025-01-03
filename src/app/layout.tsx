import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "../libs/lenis";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Future Framez Studio ",
  description:
    "Future Framez is your one-stop solution for all visual storytelling needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={``}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </body>
      </html>
    </ReactLenis>
  );
}

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
