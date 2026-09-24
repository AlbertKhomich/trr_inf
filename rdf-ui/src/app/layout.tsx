import type { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";
import "katex/dist/katex.min.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRR 318 | Research publications",
  description: "Explore TRR 318 publications on Constructing Explainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <div className="trr-background" aria-hidden="true" />
        <div className="app-content">
          <AuthProvider>{children}</AuthProvider>
        </div>
      </body>
    </html>
  );
}
