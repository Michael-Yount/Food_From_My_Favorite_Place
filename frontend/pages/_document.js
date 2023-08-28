import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200&display=swap" rel="stylesheet"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
