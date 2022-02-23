import styled from "styled-components"
import { l2 as headingsL2Default } from "src/styles/constants/desktop/titles"
import { l1 as textL1Default } from "@texts/desktop"
import { neutral600, neutral300 } from "@colors"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import Select from "src/components/common/Select"
import React, { useState } from "react"
import SortSelectorBTN from "src/components/common/SortSelectorBTN"
import PagerPill from "src/components/common/PagerPill"

const filterByOptions = [
  {
    label: "All Products",
    value: "All Products",
  },
  {
    label: "Gaming",
    value: "Gaming",
  },
  {
    label: "Audio",
    value: "Audio",
  },
  {
    label: "Smart Home",
    value: "Smart Home",
  },
  {
    label: "Monitors $ TV",
    value: "Monitors $ TV",
  },
  {
    label: "Drones",
    value: "Drones",
  },
  {
    label: "Phones",
    value: "Phones",
  },
  {
    label: "Phone Accessories",
    value: "Phone Accessories",
  },
]

enum SortBy {
  MOST_RECENT = "Most Recent",
  LOWEST_PRICE = "Lowest Price",
  HIGHEST_PRICE = "Highest Price",
}

const ProductsSection = () => {
  const [selectValue, setSelectValue] = useState<string>(filterByOptions[0].value)
  const [sortByValue, setSortByValue] = useState<SortBy | undefined>(undefined)

  return (
    <ProductsSectionWrapper>
      <Title>
        <span>TECH </span>PRODUCTS
      </Title>
      <FilterOptions>
        <label style={{ marginRight: "16px" }} htmlFor="filter">
          Filter by:
        </label>
        <Select
          value={selectValue}
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectValue(ev.target.value)
          }}
          label="filter"
        >
          {filterByOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <SortOptionsWrapper>
          <label htmlFor="">Sort by:</label>
          {Object.values(SortBy).map((sortBy) => (
            <SortSelectorBTN
              key={sortBy}
              isSelected={sortByValue === sortBy}
              onClick={() => setSortByValue(sortBy)}
            >
              {sortBy}
            </SortSelectorBTN>
          ))}
        </SortOptionsWrapper>
        <PagerPill />
      </FilterOptions>
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
const FilterOptions = styled.div`
  display: flex;
  align-items: center;
  color: ${neutral600};
  ${cssPropertiesToString(textL1Default)};
  div:last-child {
    margin-left: auto;
  }
`

const SortOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  &::before {
    display: inline-block;
    content: "";
    border-right: 2px solid ${neutral300};
    height: 3.65rem;
    margin-left: 40px;
    margin-right: calc(40px - 12px);
  }
`
