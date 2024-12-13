import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import ContextProvider from "@/context";

export const metadata: Metadata = {
  title: "Pets",
  description: "NFTs Marketplace",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const getHeaders = await headers()
  const cookies = getHeaders.get('cookie')
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen"
      >
        <ContextProvider cookies={cookies}>
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
