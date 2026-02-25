import type { Metadata } from "next";
import Link from 'next/link';
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import ContactWidget from "@/components/ContactWidget";


const inter = Inter({
  variable: "--font-inter",
  subsets:["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistSans.variable}`}>
        <header className={styles.header}>
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>Access Vision</Link>
            <nav className={styles.nav}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/#mission">Mission</Link></li>
                <li><Link href="/team">Team</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        
        {/* Where page contents show*/}
        <main>{children}</main>

        <ContactWidget />
        <footer className={styles.footer}>
          <p>&copy; 2025 Access Vision. All Rights Reserved.</p>
          <div className={styles.nonProfitBadge}>501(c)(3) Non-Profit Organization (IRS Determination 2025)</div>
        </footer>
      </body>
    </html>
  );
}
