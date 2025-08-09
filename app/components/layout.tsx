"use client";

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({
  children,
  title = "Carint - Transport Services",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-roboto bg-gray-50 text-gray-900">
      {/* SEO + Meta */}
      <Head>
        <title>{title}</title>
        <meta name="description" content="Carint Transport Services" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content with Smooth Fade */}
      <main className="flex-grow container mx-auto px-4 py-6 animate-fadeIn">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
