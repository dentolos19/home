import NavigationBar from "@/components/navigation-bar";
import SearchModal from "@/components/search-modal";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennise Catolos",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang={"en"} data-theme={"forest"}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://kit.fontawesome.com/d0674de6ae.js" crossOrigin="anonymous" async />
      </head>
      <body className={font.className}>
        <div className={"h-dvh grid grid-rows-[auto,1fr]"}>
          <NavigationBar />
          {props.children}
        </div>
        <SearchModal />
        <Analytics />
      </body>
    </html>
  );
}