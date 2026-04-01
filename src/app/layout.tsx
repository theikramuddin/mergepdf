import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merge PDF Online – Combine PDF Files Free",
  description:
    "Merge multiple PDF files into one instantly, for free. No upload to servers - everything happens in your browser. Fast, private, and easy to use.",
  keywords: [
    "merge pdf",
    "combine pdf",
    "pdf merger",
    "join pdf files",
    "free pdf tool",
    "online pdf combiner",
  ],
  openGraph: {
    title: "Merge PDF Online – Combine PDF Files Free",
    description:
      "Merge multiple PDF files into one instantly, for free. No server upload - 100% private.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
