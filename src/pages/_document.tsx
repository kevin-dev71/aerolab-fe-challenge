import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static getInitialProps = async (ctx: DocumentContext) => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Aerolab | Frontend challenge" />
          <meta name="title" content="Aerolab | Frontend challenge"></meta>
          <link rel="icon" href="/favicon.svg" />
          <meta name="keywords" content="aerolab, challenge, kevin" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aerolab-fe-challenge.vercel.app/" />
          <meta property="og:title" content="Aerolab Challenge" />
          <meta property="og:description" content="This FE challenge is amazing!" />
          <meta
            property="og:image"
            content="https://aerolab-fe-challenge.vercel.app/images/metadata-SEO.png?raw=true"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://aerolab-fe-challenge.vercel.app/" />
          <meta property="twitter:title" content="Aerolab Challenge" />
          <meta
            property="twitter:description"
            content="El mejor juego de Tutti Frutti, ¡STOP! o Basta! llevado a lo digital, para disfrutar con tus amigos y pasar un buen rato."
          />
          <meta
            property="twitter:image"
            content="https://aerolab-fe-challenge.vercel.app/images/metadata-SEO.png?raw=true"
          />
        </Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
