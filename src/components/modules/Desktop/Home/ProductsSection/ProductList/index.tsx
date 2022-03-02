import type { ProductType } from "src/types/product"
import styled from "styled-components"
import ProductItem from "src/components/modules/Desktop/Home/ProductsSection/ProductItem"
import PagerPill from "src/components/common/PagerPill"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import { l1 as textL1Default } from "@texts/desktop"
import React from "react"
import { brandGradient, neutral600 } from "@colors"

const ProductList = ({
  products,
  currentPage,
  maxPage,
  next,
  prev,
}: {
  products: ProductType[]
  currentPage: number
  maxPage: number
  next: () => void
  prev: () => void
}) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
      <Pagination>
        <PaginationTextWrapper>
          <span>16 of 32</span> products
        </PaginationTextWrapper>
        <PagerPill
          currentPage={currentPage}
          maxPage={maxPage}
          next={next}
          prev={prev}
          style={{ position: "absolute", right: 0 } as React.CSSProperties}
        />
      </Pagination>
    </Wrapper>
  )
}

export default ProductList

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 64px;
  color: ${neutral600};
`
const Pagination = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${cssPropertiesToString(textL1Default)}
  width: 100%
`
const PaginationTextWrapper = styled.div`
  margin: 0 auto;
  span {
    background: ${brandGradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`
