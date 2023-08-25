import "@/styles/global.scss";

import { Metadata } from "next";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dennise Catolos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html className={font.className}>
        <body>
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}