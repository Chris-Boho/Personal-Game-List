import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Provider from "./components/provider";
import Header from "./components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`font-sans ${inter.variable}`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
