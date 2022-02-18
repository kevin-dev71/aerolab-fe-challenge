import DesktopLogo from "src/assets/images/aerolab-logo-1.svg"
import styled from "styled-components"
import AeropayDropDown from "src/components/common/AeropayDropDown"
import Image from "next/image"

const Navbar = () => {
  return (
    <Wrapper>
      <Image src={DesktopLogo.src} width="126" height="48" alt="Aerolab" />
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
