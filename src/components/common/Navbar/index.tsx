import DesktopLogo from "src/assets/images/aerolab-logo-1.svg"
import styled from "styled-components"
import AeropayDropDown from "src/components/common/AeropayDropDown"

const Navbar = () => {
  return (
    <Wrapper>
      <DesktopLogo width="126" height="48" />
      <AeropayDropDown />
    </Wrapper>
  )
}
export default Navbar

const Wrapper = styled.nav`
  display: flex;
  padding: 40px 0;
  max-width: 1464px;
  margin: 0 auto;
`
