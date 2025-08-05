import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Analytics } from '@vercel/analytics/next';
=======
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import "@stream-io/video-react-sdk/dist/css/styles.css";
>>>>>>> c33ccb5 (Part-1)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STEM",
  description: "Video Calling App",
  icons: {
<<<<<<< HEAD
    icon: '/icons.logo.png'
=======
    icon: '/icons.logo.svg'
>>>>>>> c33ccb5 (Part-1)
  }
};

// const inter = Inter(subnets: ["latin"])

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/yoom-logo.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1E293B",
            colorInputBackground: "#334155",
            colorInputText: "#fff",
          },
        }}>
      <body
        className={`${geistSans} bg-slate-900`}
      >
        {children}
<<<<<<< HEAD
        <Analytics />
=======
        <Toaster />
>>>>>>> c33ccb5 (Part-1)
      </body>
      </ClerkProvider>
    </html>
  );
}
