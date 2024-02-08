import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import { Montserrat } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "SJFlix Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
      <Header />
      {children}
      </body>
    </html>
  );
}
