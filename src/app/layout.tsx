// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/componentes/header/header";
import Footer from "@/componentes/footer/footer";

import ModalCartWrapper from "@/componentes/modal/modalCartWraper";
import ToastWrapper from "@/componentes/toast/toastWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good food",
  description: "Delivery website for your favorite food",
  icons: {
    icon: "/favIcon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          <ModalCartWrapper />
          <ToastWrapper />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}