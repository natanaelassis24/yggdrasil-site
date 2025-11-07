import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Yggdrasil",
  description: "Explorando o espectro completo da tecnologia humana e além.",
  manifest: "/manifest.json",
  themeColor: "#bfa76f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ======== META TAGS PWA ======== */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logos/logo.png" />
        <meta name="theme-color" content="#bfa76f" />
        <meta name="background_color" content="#0a0a0a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Yggdrasil" />
        <link rel="apple-touch-icon" href="/logos/logo.png" />
      </head>

      <body className="bg-[#0a0a0a] text-gray-200 font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
