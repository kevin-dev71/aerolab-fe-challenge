import styled from "styled-components"
type Props = { children: React.ReactNode; l1AllCaps24LS?: boolean; color?: string }

export const Title: React.FC<Props> = ({ children }) => {
  return <Text>{children}</Text>
}

const Text = styled.text`
  font-size: "200px";
  font-weight: 900;
  line-height: "80%";
  letter-spacing: "0";
  color: ${(props) => props.color};
  text-transform: "uppercase";
`
