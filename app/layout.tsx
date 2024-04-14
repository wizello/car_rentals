import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";


export const metadata: Metadata = {
  title: "luxe & Speed",
  description: "rev the throttle, you won't regret it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
            {children}
        <Footer />
        </body>
    </html>
  );
}
