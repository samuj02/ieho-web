import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IEHO | Equipamientos para Pozos Profundos y Riego Agrícola",
  description: "Venta de equipo, mantenimiento correctivo/preventivo y atención a urgencias 24/7 en pozos profundos e instalaciones hidráulicas y eléctricas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="scroll-smooth"
    >
      <body className={`${montserrat.className} antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
