import { inter } from "@/fonts";
import { LayoutProps } from "@/types";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/next";
import clsx from "clsx";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dennise Catolos",
};

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en" data-theme="business">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://kit.fontawesome.com/d0674de6ae.js" crossOrigin="anonymous" async />
      </head>
      <body className={clsx("antialiased", inter.className)}>
        <ClerkProvider appearance={{ baseTheme: dark }}>{props.children}</ClerkProvider>
        <Analytics />
      </body>
    </html>
  );
}