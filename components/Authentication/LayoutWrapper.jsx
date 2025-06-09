"use client";

import { usePathname } from 'next/navigation';
import Header from "../../components/HomePage/Header";
import Footer from "../../components/HomePage/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login"; 

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
