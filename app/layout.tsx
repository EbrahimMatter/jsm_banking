import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// إعداد خط Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// إعداد خط IBM Plex Serif (يجب تحديد الأوزان المستخدمة)
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Horizen",
  description: "Horizen is a banking platform",
  icons: {
    icon: "/public/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
