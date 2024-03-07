import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "The Accessibility Blog",
  description: "The voice of the excluded",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ModalProvider>
        <body className="font-poppins overflow-hidden">{children}</body>
      </ModalProvider>
    </html>
  );
}
