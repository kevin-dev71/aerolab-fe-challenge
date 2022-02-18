import styled from "styled-components"
import singleWavePatternImg from "src/assets/images/single-wave-pattern.svg"
import heroDesktopImg from "src/assets/images/hero-desktop.png"
import { sectionBg } from "src/styles/constants/colors"
import { L1 } from "src/components/modules/Desktop/Text"
import { l1 as headingsL1Default } from "src/styles/constants/desktop/titles"
import { l1AllCaps } from "src/styles/constants/desktop/texts"
import { neutral600, brandGradient } from "src/styles/constants/colors"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <HeroTitleContainer>
          <h1>
            <span>EXPLORE THE</span>
            <span>TECH </span>
            <span>ZONE</span>
          </h1>
          <div style={{ maxWidth: "523px" }}>
            <L1 color={neutral600}>
              Here{" you’ll "}be able to exchange all of your hard-earned Aeropoints and exchange
              them for cool tech.
            </L1>
          </div>
        </HeroTitleContainer>
        <HeroImageContainer>
          <HeroImage src={heroDesktopImg.src} alt="Image" width="897" height="795" />
        </HeroImageContainer>
      </Container>
    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.section`
  background-image: url(${singleWavePatternImg.src});
  margin-top: 73px;
`

const Container = styled.div`
  display: flex;
  max-width: 1464px;
  margin: 0 auto;
`

const HeroImageContainer = styled.div`
  position: relative;
  background: ${sectionBg};
  width: 722px;
  height: 600px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 104px;
  flex: 1;
`
const HeroImage = styled.img`
  display: block;
  position: absolute;
  object-fit: center;
  bottom: 0;
  left: -90px;
`
const HeroTitleContainer = styled.div`
  flex: 1;

  h1 span {
    &:nth-child(1) {
      ${cssPropertiesToString(l1AllCaps)}
      color: ${neutral600};
      display: block;
    }
    &:nth-child(2) {
      background: ${brandGradient};
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    &:nth-child(2),
    &:nth-child(3) {
      ${cssPropertiesToString(headingsL1Default)}
    }
  }
`
