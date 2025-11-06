import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Arimo, Bricolage_Grotesque } from "next/font/google";


const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-arimo",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-bricolage",
});


export const metadata = {
  title: "Hupp",
  description: "Plataforma de resultados para empresas e instituições",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
