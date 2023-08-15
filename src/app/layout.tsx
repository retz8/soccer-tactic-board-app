import "./globals.css";
import type { Metadata } from "next";
import { globalFont } from "@/utils/fonts/globalFont";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Tactic Board",
  description: "Online Football Tactic Board",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={globalFont.className}>
      <body className="flex flex-col md:flex-row">
        {/* Header: less than md */}
        <header className="block md:hidden">
          <Header />
        </header>

        {/* Sidebar: greater than md */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <main className="md:ml-64 flex-[1_1_0] overflow-auto">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </main>

        {/* Footer will be added later
        <footer><Footer /></footer> */}
      </body>
    </html>
  );
}
