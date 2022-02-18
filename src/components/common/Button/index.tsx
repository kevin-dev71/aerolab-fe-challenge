import React from "react"
import { brandGradient } from "src/styles/constants/colors"
import styled from "styled-components"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import { l1 } from "src/styles/constants/desktop/texts"
import { neutral0 } from "src/styles/constants/colors"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default"
}

const Button: React.FC<Props> = ({ className, children, variant = "default" }) => {
  return <ButtonElem className={className}>{children}</ButtonElem>
}
export default Button

const ButtonElem = styled.button`
  border-radius: 24px;
  padding: 24px 40px;
  border: none;
  background: ${brandGradient};
  color: ${neutral0};
  ${cssPropertiesToString(l1)};
`
