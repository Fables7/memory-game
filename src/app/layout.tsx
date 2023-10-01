import "./globals.css";
import type { Metadata } from "next";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${atkinson.className}`}>
        {children}
      </body>
    </html>
  );
}
