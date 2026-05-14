import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Southern Vietnam 4D3N Trip",
  description: "Nam Cat Tien • Ben Tre • Saigon — A perfect mix of jungle, river & city life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
