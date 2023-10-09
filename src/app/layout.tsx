import "./globals.css";
import type { Metadata } from "next";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";
import ReduxProvider from "@/providers/reduxProvider";

const inter = Inter({ subsets: ["latin"] });
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Memory Game",
  description: "Memory Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${atkinson.className}`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
