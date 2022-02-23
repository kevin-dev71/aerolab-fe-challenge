import type { ProductType } from "src/types/product"
import styled from "styled-components"

const ProductItem = ({ product }: { product: ProductType }) => {
  return <Wrapper>{product.name}</Wrapper>
}

export default ProductItem

const Wrapper = styled.article``
