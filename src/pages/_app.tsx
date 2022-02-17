import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "src/components/common/Layout"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aerolab | Frontend challenge</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aerolab-fe-challenge.vercel.app/" />
        <meta property="og:title" content="Frutti ¡STOP!" />
        <meta
          property="og:description"
          content="El mejor juego de Tutti Frutti, ¡STOP! o Basta! llevado a lo digital, para disfrutar con tus amigos y pasar un buen rato."
        />
        <meta
          property="og:image"
          content="https://aerolab-fe-challenge.vercel.app/images/metadata-SEO.png?raw=true"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aerolab-fe-challenge.vercel.app/" />
        <meta property="twitter:title" content="Frutti ¡STOP!" />
        <meta
          property="twitter:description"
          content="El mejor juego de Tutti Frutti, ¡STOP! o Basta! llevado a lo digital, para disfrutar con tus amigos y pasar un buen rato."
        />
        <meta
          property="twitter:image"
          content="https://aerolab-fe-challenge.vercel.app/images/metadata-SEO.png?raw=true"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
