import { Noto_Sans } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Thomas Eg Matthiesen",
  description: "Digital design - UX, audio og udvikling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${sans.className} ${sans.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
