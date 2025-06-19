import Navbar from "@/components/Navbar";
import { Jura } from "next/font/google";
import "./globals.css";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`lg:text-xl xl:text-2xl 2xl:text-3xl ${jura.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
