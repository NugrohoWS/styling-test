import type { Metadata } from "next";
import { tstarPro } from "./fonts/font";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tstarPro.variable} antialiased`}>
        <AppHeader />
        {children}
        <AppFooter />
        <div className="fixed bottom-[72px] right-[60px] z-50">
          <Link href="https://wa.me/6281234567890" target="_blank">
            <Image
              src="/assets/svg/whatsapp.svg"
              alt="Whatsapp"
              width={72}
              height={72}
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
