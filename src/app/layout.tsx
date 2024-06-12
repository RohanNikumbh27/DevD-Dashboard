import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devdynamics Dashboard",
  description: "DashBoard de DevDynamics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-tr from-[#e188ff] to-[#ddddff] min-h-screen">
          <Navbar />
          <div className=" w-full h-20" />
          <div className="animate-this-div">{children}</div>
        </div>
      </body>
    </html>
  );
}
