import styled from "styled-components"
import Icon from "src/components/common/Icon"
import { brandGradient } from "src/styles/constants/colors"

const AeropayDropDown = () => {
  return (
    <Wrapper>
      <PresentationalBit>
        <Icon icon="aero-pay" width="32" height="32" alt="Points: " />
        <Points>1000</Points>
        <ChevronDefault icon="chevron-default" width="24" height="24" alt="show more" />
      </PresentationalBit>
    </Wrapper>
  )
}
export default AeropayDropDown

const Wrapper = styled.div`
  width: 156px;
  height: 48px;
  border-radius: 16px;
  padding: 8px 0 8px 16px;
  margin-left: auto;
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 8px 0px #0000000d;
`

const PresentationalBit = styled.div`
  display: flex;
  align-items: center;
`

const Points = styled.span`
  background: ${brandGradient};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  margin-left: 8px;
`

const ChevronDefault = styled(Icon)`
  transform: rotate(90deg);
  margin: 0 auto;
`
