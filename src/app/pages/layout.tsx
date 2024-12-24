import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "../components/header/header";
import Container from "../components/container/Container";
import { SearchProvider } from "../hooks/context/SearchContext";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reserva de Locais",
  description: "Sistema de reserva e cadastro de locais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          <Header />
          <Container>{children}</Container>
        </SearchProvider>
      </body>
    </html>
  );
}
