import type { Metadata } from "next";
import {
  Inter,
  Kolker_Brush,
  Kaushan_Script,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Georgewill-Hope | Rare blocks",
  description: "Card company",
};

const kolker_brush = Kolker_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kolker-Brush",
});

const kaushan_script = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kaushan-script",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kolker_brush.variable} ${kaushan_script.variable} ${montserrat.className}`}>
        <main>
          <Navbar />
        </main>
        {children}
      </body>
    </html>
  );
}
