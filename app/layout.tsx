import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STEM",
  description: "Video Calling App",
  icons: {
    icon: '/icons.logo.png'
  }
};

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
            logoImageUrl: "/icons/stem-logo.png",
          },
          elements: {
            logoImage: { width: "150px", height: "150px" }, // Increase width & height (adjust as needed)
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
        className={`${geistSans} bg-[#161925]`}
      >
        {children}

        <Toaster />
      </body>
      </ClerkProvider>
    </html>
  );
}
