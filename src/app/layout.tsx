import "@/styles/core.scss";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dennise Catolos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}