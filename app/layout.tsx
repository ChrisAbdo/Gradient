import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import MainNav from "@/components/main-nav";
import { ThemeProvider } from "@/lib/theme-provider";
import Footer from "@/components/footer";

export const metadata = {
  title: "Gradient Generator",
  description:
    "Generate random gradients for your next project. You can use the generated gradients for your backgrounds, avatars, and more.",
  openGraph: {
    title: "Gradient Generator",
    description:
      "Generate random gradients for your next project. You can use the generated gradients for your backgrounds, avatars, and more.",
  },
  metadataBase: new URL("https://gradient.chrisabdo.dev"),
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          {children}
          <Footer />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
