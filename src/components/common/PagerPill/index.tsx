import styled from "styled-components"
import { neutral300, brandGradient } from "@colors"
import Button from "src/components/common/PagerPill/PagerPill.Button"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number
  maxPage: number
  next: () => void
  prev: () => void
}

const PagerPill: React.FC<Props> = ({ currentPage, maxPage, next, prev, ...props }) => {
  return (
    <PagerPillWrapper {...props}>
      <Button disabled backButton onClick={prev} />
      <PageText>
        Page{" "}
        <span>
          {currentPage} of {maxPage}
        </span>
      </PageText>
      <Button onClick={next} />
    </PagerPillWrapper>
  )
}

export default PagerPill

const PagerPillWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${neutral300};
  padding: 12px 16px;
`

const PageText = styled.p`
  display: inline-block;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  margin: auto 24px;

  span {
    background: ${brandGradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`
