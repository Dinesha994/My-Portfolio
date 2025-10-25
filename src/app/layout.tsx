import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashReset from "@/components/HashReset";

export const metadata = {
  title: "Dinesha Bungatavula | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <HashReset />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
