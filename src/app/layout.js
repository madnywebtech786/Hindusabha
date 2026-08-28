import { Cormorant_Garamond, Karla, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tiro = Tiro_Devanagari_Hindi({
  variable: "--font-tiro",
  subsets: ["devanagari", "latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Sant Mahasabha Society of Alberta",
  description:
    "Sant Mahasabha Society of Alberta — serving the Hindu community of Calgary through spiritual guidance, cultural preservation, and community service.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} ${tiro.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
