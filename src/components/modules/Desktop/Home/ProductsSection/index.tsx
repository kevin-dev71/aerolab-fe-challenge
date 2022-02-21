import styled from "styled-components"
import { l2 as headingsL2Default } from "src/styles/constants/desktop/titles"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import Select from "src/components/common/Select"
import { useState } from "react"

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

const ProductsSection = () => {
  const [selectValue, setSelectValue] = useState(filterByOptions[0].value)

  return (
    <ProductsSectionWrapper>
      <Title>
        <span>TECH </span>PRODUCTS
      </Title>
      <FilterOptions>
        <Select
          label="Filter By: "
          value={selectValue}
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setSelectValue(ev.target.value)}
        >
          {filterByOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
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
`
