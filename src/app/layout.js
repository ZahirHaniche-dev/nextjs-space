import MainHeader from "../components/main-header";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";

// Google fonts
const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
  weight: ["400"],
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["400"],
});


export default function RootLayout({ children }) {
 return (
  <html lang="en">
     <body className={barlow.variable}>
        <header className="absolute left-0 right-0 top-10 mx-auto h-[48px] max-w-[1536px] md:top-16 font-headings">
          <MainHeader />
        </header>
        {children}
    </body>
  </html>
  )
}
