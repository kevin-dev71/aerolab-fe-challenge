import Image from "next/image"
import Button from "src/components/common/Button"
import type { ProductType } from "src/types/product"
import styled from "styled-components"
import { neutral300 } from "@colors"

const ProductItem = ({ product }: { product: ProductType }) => {
  console.log(product)
  return (
    <Wrapper>
      <ProductCard>
        <ProductImage>
          <Image src={product.img.hdUrl} alt={product.name} width="280px" height="204px" />
        </ProductImage>
        <ProductDescription>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </ProductDescription>
      </ProductCard>
      <Button style={{ width: "100%" }}>Redeem for {product.cost}</Button>
    </Wrapper>
  )
}

export default ProductItem

const Wrapper = styled.article`
  flex: 0 0 348px;
  height: 506px;
`

const ProductCard = styled.div`
  border: 1px solid ${neutral300};
  margin-top: 64px;
  border-radius: 16px;
  /* filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05)); */
`
const ProductImage = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin: 64px 0;
`

const ProductDescription = styled.footer`
  width: 100%;
`
