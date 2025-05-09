// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ColorSchemeScript } from "@mantine/core";
import { ReactNode } from "react";

export const metadata = {
  title: "Your App",
  description: "Using Mantine UI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body style={{
        backgroundColor:" #FBFBFF"
      }}>
        <MantineProvider
          theme={{
            fontFamily: "Satoshi Variable, sans-serif",
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
