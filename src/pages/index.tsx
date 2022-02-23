import type { NextPage, InferGetServerSidePropsType, GetServerSideProps } from "next"
import SEO from "src/components/common/SEO"
import Hero from "src/components/modules/Desktop/Home/Hero"
import ProductsSection from "src/components/modules/Desktop/Home/ProductsSection"
import { getProducts } from "src/services/products"
import type { ProductType } from "src/types/product"

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await getProducts()
    return {
      props: { products },
    }
  } catch (err) {
    console.log("Error getProducts", err)
    return {
      props: { products: [] as ProductType[] },
    }
  }
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ products }) => {
  return (
    <>
      <SEO title={"Aerolab Challenge"} />

      <main>
        <Hero />
        <ProductsSection products={products as ProductType[]} />
      </main>
    </>
  )
}

export default Home
