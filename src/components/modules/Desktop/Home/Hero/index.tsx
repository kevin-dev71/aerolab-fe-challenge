import styled from "styled-components"
// import singleWavePatternImg from "src/assets/images/single-wave-pattern.svg"
import heroDesktopImg from "src/assets/images/hero-desktop.png"
import walkthoughtImg1 from "src/assets/images/walkthroug-1-desktop.png"
import walkthoughtImg2 from "src/assets/images/walkthroug-2-desktop.png"
import walkthoughtImg3 from "src/assets/images/walkthroug-3-desktop.png"
import { L1 } from "src/components/modules/Desktop/Text"
import {
  l1 as headingsL1Default,
  l3 as headingL3Default,
} from "src/styles/constants/desktop/titles"
import { l1AllCaps, l1 as textL1Default } from "src/styles/constants/desktop/texts"
import {
  neutral600,
  brandGradient,
  sectionBg,
  neutral0,
  illustrationBg,
  lightBrandPrimary,
} from "src/styles/constants/colors"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"
import Button from "src/components/common/Button"
import Icon from "src/components/common/Icon"
import ProductsSection from "src/components/modules/Desktop/Home/ProductsSection"

const Hero = () => {
  return (
    <>
      <BackgroundWrapper>
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
            <HeroButton>
              <span>
                VIEW ALL PRODUCTS <Icon icon="arrow-down" style={{ marginLeft: "12.5px" }} />
              </span>
            </HeroButton>
          </HeroTitleContainer>
          <HeroImageContainer>
            <HeroImage src={heroDesktopImg.src} alt="Image" width="897" height="795" />
          </HeroImageContainer>
        </Container>
        <WaltkthroughSection>
          <WaltkthroughList>
            <li>
              <div className="top-card">
                <img src={walkthoughtImg1.src} alt="" />
              </div>
              <footer className="bottom-card">
                <BottomCardTitle>
                  <IconWrapper icon="walkthrough-1" />
                  <h3>1&#8212;BROWSE</h3>
                </BottomCardTitle>
                <p>Browse our tech catalog with more than 20 top tech products</p>
              </footer>
            </li>
            <li>
              <div className="top-card">
                <img src={walkthoughtImg2.src} alt="" />
              </div>
              <footer className="bottom-card">
                <BottomCardTitle>
                  <IconWrapper icon="walkthrough-2" />
                  <h3>2&#8212;CHOOSE</h3>
                </BottomCardTitle>
                <p>Exchange your hard earned AeroPoints for the item you want</p>
              </footer>
            </li>
            <li>
              <div className="top-card">
                <img src={walkthoughtImg3.src} alt="" />
              </div>
              <footer className="bottom-card">
                <BottomCardTitle>
                  <IconWrapper icon="walkthrough-3" />
                  <h3>3&#8212;ENJOY</h3>
                </BottomCardTitle>
                <p>All done, you can relax! We’ll take care of delivery of your tech item!</p>
              </footer>
            </li>
          </WaltkthroughList>
        </WaltkthroughSection>
      </BackgroundWrapper>
      <ProductsSection />
    </>
  )
}
export default Hero

const BackgroundWrapper = styled.section`
  background-image: url("/images/single-wave-pattern.svg");
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
      background-clip: text;
    }
    &:nth-child(2),
    &:nth-child(3) {
      ${cssPropertiesToString(headingsL1Default)}
    }
  }
`

const HeroButton = styled(Button)`
  margin-top: 64px;
  span {
    vertical-align: middle;
    margin-right: 9.25px;
  }
`
const WaltkthroughSection = styled.section`
  background: ${sectionBg};
  margin-top: 228px;
  height: 528px;
  position: relative;
`

const WaltkthroughList = styled.ol`
  display: flex;
  max-width: 1464px;
  margin: 0 auto;
  height: 680px;
  list-style: none;
  li {
    position: absolute;
    background-color: ${neutral0};
    padding: 12px;
    width: 532px;
    border: 1px solid #dae4f2;
    border-radius: 32px;
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
    .top-card {
      width: 100%;
      background: ${illustrationBg};
      border-radius: 24px 24px 0px 0px;
      img {
        width: 100%;
      }
    }
    .bottom-card {
      border-radius: 0px 0px 24px 24px;
      border: 1px solid #dae4f2;
      padding: 16px 24px 24px;

      p {
        margin: 0;
        ${cssPropertiesToString(textL1Default)};
        color: ${neutral600};
        max-width: 372px;
      }
    }
    &:nth-child(1) {
      transform: rotate(-3deg);
      z-index: 1;
      top: -45.84px;
      right: 1125px;
    }
    &:nth-child(2) {
      z-index: 2;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:last-child {
      z-index: 3;
      transform: rotate(3deg);
      top: -45.84px;
      left: 1125px;
    }
  }
`
const IconWrapper = styled(Icon)`
  background-color: ${lightBrandPrimary};
  padding: 4px;
  border-radius: 8px;
  width: 48px;
  height: 48px;
`
const BottomCardTitle = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0;
    background: ${brandGradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    ${cssPropertiesToString(headingL3Default)}
    margin-left: 14px;
    text-transform: uppercase;
  }
`
