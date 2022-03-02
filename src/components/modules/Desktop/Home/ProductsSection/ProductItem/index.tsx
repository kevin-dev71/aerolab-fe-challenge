import Image from "next/image"
import Button from "src/components/common/Button"
import type { ProductType } from "src/types/product"
import styled from "styled-components"
import { neutral300, neutral600, neutral900 } from "@colors"
import { l1 as textL1Default, l2AllCaps } from "@texts/desktop"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import Icon from "src/components/common/Icon"

const ProductItem = ({ product }: { product: ProductType }) => {
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
      <Button
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "16px 24px",
          borderRadius: "16px",
          marginTop: "16px",
        }}
      >
        Redeem for <Icon width="24px" height="24px" icon="aeropay-3" />
        {product.cost}
      </Button>
    </Wrapper>
  )
}

export default ProductItem

const Wrapper = styled.article`
  flex: 0 0 348px;
  height: 506px;
  margin-bottom: 80px;
`

const ProductCard = styled.div`
  border: 1px solid ${neutral300};
  border-radius: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`
const ProductImage = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin: 64px 0;
  img {
    background: white;
  }
`

const ProductDescription = styled.footer`
  width: 100%;
  border-top: 1px solid ${neutral300};
  padding: 16px 24px 24px;
  h3,
  p {
    margin: 0;
  }
  h3 {
    color: ${neutral900};
    ${cssPropertiesToString(textL1Default)}
  }
  p {
    color: ${neutral600};
    ${cssPropertiesToString(l2AllCaps)}
  }
`
