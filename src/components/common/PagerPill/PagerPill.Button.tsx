import styled from "styled-components"
import Icon from "src/components/common/Icon"
import { lightBrandPrimary, neutral200 } from "@colors"

interface Props extends React.HTMLProps<HTMLButtonElement> {
  backButton?: boolean
}

const Button: React.FC<Props> = ({ disabled, backButton = false }) => {
  return (
    <ButtonWrapper disabled={disabled} color={disabled ? neutral200 : lightBrandPrimary}>
      <ChevronDefault
        style={
          {
            "--rotate": backButton ? "180deg" : "0deg",
            "--opacity": disabled ? 0.2 : 1,
          } as React.CSSProperties
        }
        icon="chevron-default"
        width="24"
        height="24"
      />
    </ButtonWrapper>
  )
}

export default Button

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
`

const ChevronDefault = styled(Icon)`
  transform: rotate(var(--rotate));
  opacity: var(--opacity);
  display: block;
  margin: 0 auto;
`
