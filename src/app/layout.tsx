import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import StyledComponentsRegistry from "@/shared/lib/registerStyledComponent";
import GlobalStyle from "@/styles/GlobalStyled";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle/>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
