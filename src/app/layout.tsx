import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/common/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaLogic Software Pvt. Ltd.",
  description:
    "Discover how Metalogic Software Private Limited, based in Lalitpur, empowers businesses with cutting-edge web and mobile app solutions. From innovative technologies to personalized development, partner with us for excellence in software tailored to your unique needs.",
  icons: { icon: "./logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
