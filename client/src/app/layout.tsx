import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from '@/components/ui/sonner'
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meeting Scheduler",
  description: "Create and schedule meetings with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Toaster richColors position="bottom-center"/>
      </body>
    </html>
  );
}
