import { Sidebar } from "@/components/Sidebar";
import { MobileNavBar } from "@/components/MobileNavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Luke Murray - Software Engineer",
  description:
    "Luke Murray is a senior software engineer with 8 years of experience building scalable web apps and products in startup environments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <main className="flex-grow md:ml-64 p-8 md:p-12 pb-20 md:pb-12 overflow-auto">
            {children}
          </main>
          <MobileNavBar />
        </div>
      </body>
    </html>
  );
}
