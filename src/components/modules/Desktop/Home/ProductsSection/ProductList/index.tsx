import type { ProductType } from "src/types/product"
import styled from "styled-components"
import ProductItem from "src/components/modules/Desktop/Home/ProductsSection/ProductItem"

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </Wrapper>
  )
}

export default ProductList

const Wrapper = styled.section``
