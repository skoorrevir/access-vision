import type { Metadata } from "next";
import Link from 'next/link';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Access Vision | Mobile Eye Care in Alabama",
  description: "The website for Access Vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div className="nav-container">
            <a href="#" className="logo">Access Vision</a>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><Link href="/team">Team</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        
        {/* Where page contents show*/}
        {children}

        <footer>
          <p>&copy; 2025 Access Vision. All Rights Reserved.</p>
          <div className="non-profit-badge">501(c)(3) Non-Profit Organization (IRS Determination 2025)</div>
        </footer>
      </body>
    </html>
  );
}
