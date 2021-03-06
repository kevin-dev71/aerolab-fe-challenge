import React from "react"
import AeroPayImg1Url from "@icons/aeropay-1.svg"
import AeroPay3Img1Url from "@icons/aeropay-3.svg"
import ChevronDefaultUrl from "@icons/chevron-default.svg"
import ArrowDown from "@icons/arrow-down.svg"
import Walkthrough1 from "@icons/walkthrough-1.svg"
import Walkthrough2 from "@icons/walkthrough-2.svg"
import Walkthrough3 from "@icons/walkthrough-3.svg"
import SelectArrow from "@icons/select-arrow.svg"

type IconsType =
  | "aero-pay"
  | "aeropay-3"
  | "chevron-default"
  | "arrow-down"
  | "walkthrough-1"
  | "walkthrough-2"
  | "walkthrough-3"
  | "select-arrow"
interface Props extends React.HTMLProps<HTMLOrSVGImageElement> {
  icon: IconsType
  width?: string
  height?: string
  style?: React.CSSProperties
}

const icons: Record<IconsType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "aero-pay": AeroPayImg1Url,
  "aeropay-3": AeroPay3Img1Url,
  "chevron-default": ChevronDefaultUrl,
  "arrow-down": ArrowDown,
  "walkthrough-1": Walkthrough1,
  "walkthrough-2": Walkthrough2,
  "walkthrough-3": Walkthrough3,
  "select-arrow": SelectArrow,
}

const Icon: React.FC<Props> = ({ icon, className, ...props }) => {
  const Component: any = icons[icon]

  if (!Component) {
    throw new Error(`No icon found: ${icon}`)
  }
  return <Component className={className} {...props} />
}
export default Icon
