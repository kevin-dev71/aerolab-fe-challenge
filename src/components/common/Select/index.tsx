import styled from "styled-components"
import { neutral600, neutral0, neutral300, neutral100 } from "@colors"
import { l1 as textL1Default } from "@texts/desktop"
import Icon from "src/components/common/Icon"
import { getDisplayedValue } from "./Select.helper"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"

const Select = ({ label, value, onChange, children }: any) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <NativeSelect id={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper>
          <Icon icon="select-arrow" width={"16"} height={"16"} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 59px;
  opacity: 0;
  color: ${neutral600};
  background-color: ${neutral0};
  padding: 16px 8px 16px 24px;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;

  option {
    padding: 16px 8px 16px 24px;

    ${cssPropertiesToString(textL1Default)};
  }

  option:hover {
    background-color: ${neutral100};
  }
`

const PresentationalBit = styled.div`
  color: ${neutral600};
  background-color: ${neutral0};
  padding: 16px 8px 16px 24px;
  padding-right: 52px;
  border-radius: 16px;
  border: 1px solid ${neutral300};
  width: 256px;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;

  pointer-events: none;
`

export default Select
