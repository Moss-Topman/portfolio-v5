import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Moss Victor Portfolio",
  description: "Portfolio of Moss Victor - Software Engineer & AI Prompt Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}