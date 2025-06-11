import './globals.css';
import { Outfit } from "next/font/google";
import LayoutWrapper from "../../components/Authentication/LayoutWrapper";
import "../../styles/Header.css";
import "../../styles/Footer.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={outfit.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
