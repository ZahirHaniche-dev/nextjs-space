import MainHeader from "../components/main-header";
import { barlow } from "../utils/fonts";
import "./globals.css";



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
