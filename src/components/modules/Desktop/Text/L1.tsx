import styled from "styled-components"
import { l1AllCaps } from "src/styles/constants/desktop/texts"

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  l1AllCaps24LS?: boolean
  color?: string
}

export const L1: React.FC<Props> = ({ children, l1AllCaps24LS, color }) => {
  return (
    <Text color={color} style={l1AllCaps24LS ? l1AllCaps : {}}>
      {children}
    </Text>
  )
}

const Text = styled.p`
  font-size: "18px";
  font-weight: 600;
  line-height: "150%";
  letter-spacing: "0";
  color: ${(props) => props.color};
`
