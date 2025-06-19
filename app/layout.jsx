import Navbar from "@/components/Navbar";
import { Jura } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jura.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
