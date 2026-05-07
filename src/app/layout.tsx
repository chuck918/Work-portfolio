import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Nazir | Inspiring Built Space",
  description: "Modern architecture and interior design studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full bg-white">
        <ScrollProgress />
        <SmoothScroll>
          <Navbar />
          <main className="w-full min-h-screen flex flex-col">
            <div className="flex-1 pt-24 md:pt-32">
              {children}
            </div>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
