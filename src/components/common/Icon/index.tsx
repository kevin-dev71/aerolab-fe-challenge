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

const icons: Record<IconsType, string> = {
  "aero-pay": AeroPayImg1Url.src,
  "chevron-default": ChevronDefaultUrl.src,
  "arrow-down": ArrowDown.src,
  "walkthrough-1": Walkthrough1.src,
  "walkthrough-2": Walkthrough2.src,
  "walkthrough-3": Walkthrough3.src,
}

const Icon: React.FC<Props> = ({ icon, ...props }) => {
  return <img src={icons[icon]} alt={icon} {...props} />
}
export default Icon
