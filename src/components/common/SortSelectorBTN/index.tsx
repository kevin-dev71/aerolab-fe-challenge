import styled from "styled-components"
import { neutral100, neutral200, brandGradient } from "@colors"
import { l1 as textL1Default } from "@texts/desktop"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import React from "react"

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode
  isSelected?: boolean
}

const SortSelectorBTN: React.FC<Props> = ({ children, isSelected = false, onClick }) => {
  return (
    <Button
      style={
        {
          "--bg-color": isSelected ? brandGradient : neutral200,
          "--color": isSelected ? neutral100 : brandGradient,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      <span>{children}</span>
    </Button>
  )
}

export default SortSelectorBTN

const Button = styled.button`
  border-radius: 12px;
  background-image: var(--bg-color);
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  span {
    background: var(--color);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    ${cssPropertiesToString(textL1Default)}
  }
`
