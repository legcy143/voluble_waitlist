import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider"


export const metadata: Metadata = {
  title: "voluble",
  description: "Voluble is a platform for sharing and discovering new ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-[100dvh] overflow-y-auto w-screen">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
