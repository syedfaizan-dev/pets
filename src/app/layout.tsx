import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cookieToInitialState } from "wagmi";
import { getConfig } from "./config";
import { Providers } from "./providers";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Pets",
  description: "NFTs Marketplace",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const getHeaders = await headers()
  const initialState = cookieToInitialState(
    getConfig(),
    getHeaders.get('cookie')
  )
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen"
      >
        <Providers initialState={initialState}>
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
