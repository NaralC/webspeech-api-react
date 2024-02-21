import * as React from "react";
import Head from "next/head";
import Voice from "@/components/voice";
import 'regenerator-runtime/runtime';

const baseStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: "100vh",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Speech Recognition 💀</title>
        <meta name="description" content="Speech Recognition 💀" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={baseStyle}>
        <Voice />
      </div>
    </>
  );
}
