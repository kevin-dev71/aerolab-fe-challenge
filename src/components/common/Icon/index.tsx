import AeroPayImg1Url from "src/assets/icons/aeropay-1.svg"
import ChevronDefaultUrl from "src/assets/icons/chevron-default.svg"
import ArrowDown from "src/assets/icons/arrow-down.svg"
import Walkthrough1 from "src/assets/icons/walkthrough-1.svg"
import Walkthrough2 from "src/assets/icons/walkthrough-2.svg"
import Walkthrough3 from "src/assets/icons/walkthrough-3.svg"

type IconsType =
  | "aero-pay"
  | "chevron-default"
  | "arrow-down"
  | "walkthrough-1"
  | "walkthrough-2"
  | "walkthrough-3"
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  icon: IconsType
}

const icons: Record<IconsType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "aero-pay": AeroPayImg1Url,
  "chevron-default": ChevronDefaultUrl,
  "arrow-down": ArrowDown,
  "walkthrough-1": Walkthrough1,
  "walkthrough-2": Walkthrough2,
  "walkthrough-3": Walkthrough3,
}

const Icon: React.FC<Props> = ({ icon, ...props }) => {
  const Component = icons[icon]

  if (!Component) {
    throw new Error(`No icon found: ${icon}`)
  }
  return <Component />
}
export default Icon
