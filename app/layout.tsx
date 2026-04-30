"use client";

import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <div key={pathname}>
          {children}
        </div>
      </body>
    </html>
  );
}
