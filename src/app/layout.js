import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, MobileNavbar, Navbar } from "./components";
import { LanguageProvider } from "./components/containers/Language";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "PT Anugrah Padua",
  description:
    "FREIGHT FORWARDER - Jasa Transportasi Pengiriman dan Pengangkutan Kendaraan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LanguageProvider>
          <Navbar />
          <MobileNavbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
