import styled from "styled-components"
import { l2 as headingsL2Default } from "src/styles/constants/desktop/titles"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"

const ProductsSection = () => {
  return (
    <ProductsSectionWrapper>
      <Title>
        <span>TECH </span>PRODUCTS
      </Title>
    </ProductsSectionWrapper>
  )
}

export default ProductsSection

const ProductsSectionWrapper = styled.section`
  max-width: 1464px;
  margin: 0 auto;
  margin-top: 235px;
`

const Title = styled.h2`
  ${cssPropertiesToString(headingsL2Default)};
  text-transform: uppercase;
  font-size: 48px;
  line-height: 38.4px;
  span {
    color: #4272ee;
  }
`
