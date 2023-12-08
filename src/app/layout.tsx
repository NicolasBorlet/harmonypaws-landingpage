import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony Paws",
  description:
    "Harmony paws is a sociability, awareness and online store application for dogs.",
  icons: {
    icon: "/images/favicon/logo-appli.png",
    shortcut: "/images/favicon/logo-appli.png",
    apple: "/images/favicon/logo-appli.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/body/grid-container-1.png" />
        <link rel="icon" href="/images/favicon/logo-appli.png" sizes="any" />
      </Head>
      <body>
        <div className="flex justify-center">{children}</div>
      </body>
    </html>
  );
}
