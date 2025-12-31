import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Importando as fontes
import "./globals.css";

// Fonte para textos corridos (leitura fácil)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

// Fonte para Títulos (Elegância/Luxo)
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reviva Saúde e Beleza | Estética em Vicente Pires",
  description: "Clínica de estética avançada em Brasília. Botox, Preenchimento, Cílios e tratamentos personalizados para realçar sua beleza natural.",
  openGraph: {
    title: "Reviva Saúde e Beleza",
    description: "Transformamos sua autoestima com técnicas modernas e naturais.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-reviva-cream text-reviva-dark`}>
        {children}
      </body>
    </html>
  );
}