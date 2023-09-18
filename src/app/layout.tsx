import "@/styles/globals.scss";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennise Catolos",
  description: "My central domain for my internet presence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/icon.png" />
      </head>
      <body className={font.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}