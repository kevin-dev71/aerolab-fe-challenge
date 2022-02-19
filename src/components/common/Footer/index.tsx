import styled from "styled-components"
import GithubSvg from "src/assets/icons/github.svg"
import { neutral600, neutral500 } from "src/styles/constants/colors"
import { l1 as textL1Default } from "src/styles/constants/desktop/texts"
import { cssPropertiesToString } from "src/utils/cssPropertiesToString"

const Footer = () => {
  return (
    <FooterWrapper>
      <a
        href="https://github.com/kevin-dev71/aerolab-fe-challenge"
        target="_blank"
        rel="noreferrer"
        aria-label="View this repository"
      >
        <GithubSvg
          width="28px"
          height="28px"
          style={{ verticalAlign: "middle", color: neutral500 }}
        />
        <span>View this repository</span>
      </a>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 160px;

  a {
    color: ${neutral600};
    text-align: right;
    span {
      margin-left: 10px;
      vertical-align: middle;
      ${cssPropertiesToString(textL1Default)}
    }
  }
`
