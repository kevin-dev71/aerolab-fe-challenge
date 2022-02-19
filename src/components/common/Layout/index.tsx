import Navbar from "src/components/common/Navbar"
import styled from "styled-components"
import Footer from "src/components/common/Footer"

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

const Container = styled.main``
