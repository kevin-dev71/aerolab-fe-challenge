import Navbar from "src/components/common/Navbar"
import styled from "styled-components"

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

const Container = styled.main``
