import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Music Events",
  description: "Discover music events",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
