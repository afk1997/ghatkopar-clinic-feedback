import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Always Care Animal Clinic - Feedback",
  description: "Share your feedback to help us care better for the voiceless. Ghatkopar & Kandivali branches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
