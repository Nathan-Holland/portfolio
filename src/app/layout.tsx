import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import GridOverlay from "@/components/GridOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nate Holland — Senior Designer",
  description:
    "Senior Designer helping brands around the globe. Based in Barcelona with over seven years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <GridOverlay />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
