import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "./Components/Nav/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Open Agent Tech Test",
  description:
    "Created by Lianna Pyman with React & Next.js and Express & Node.js for backend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavLinks />
        {children}
        <footer>
          <p>Open Agent Tech Test by Lianna Pyman</p>
        </footer>
      </body>
    </html>
  );
}
