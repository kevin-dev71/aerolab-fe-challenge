import type { NextPage } from "next"
import SEO from "src/components/common/SEO"
import Hero from "src/components/modules/Desktop/Home/Hero"

const Home: NextPage = () => {
  return (
    <>
      <SEO title={"Aerolab Challenge"} />

      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
