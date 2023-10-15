import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import { fontDmSans, fontPlayfair } from "@/assets/fonts";
import ApolloClientProvider from "@/components/apollo-provider";

export const metadata: Metadata = {
  title: "Slacke | A clone",
  description: "A clone of the popular slack web application",
};

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`bg-white text-slate-900 ${fontDmSans.variable} ${fontPlayfair.variable}`}
    >
      <body
        className={
          "bg-slate-50 min-h-screen text-base font-dm-sans font-medium antialiased"
        }
      >
        <ApolloClientProvider>
          {children}
          <Toaster position="top-right" richColors />
        </ApolloClientProvider>
      </body>
    </html>
  );
}
