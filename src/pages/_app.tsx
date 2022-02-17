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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
