import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { Inter } from "next/font/google";
import 'regenerator-runtime/runtime';

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: inter.style.fontFamily,
            margin: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
}
