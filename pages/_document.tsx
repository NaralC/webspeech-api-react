import { Html, Head, Main, NextScript } from 'next/document'
import 'regenerator-runtime/runtime';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body suppressHydrationWarning style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
