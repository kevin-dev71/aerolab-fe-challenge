import type { NextPage } from "next"
import Head from "next/head"
import Hero from "src/components/modules/Desktop/Home/Hero"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
      </Head>
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
