import AeroPayImg1Url from "src/assets/icons/aeropay-1.svg"
import ChevronDefaultUrl from "src/assets/icons/chevron-default.svg"

type IconsType = "aero-pay" | "chevron-default"
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  icon: IconsType
}

const icons: Record<IconsType, string> = {
  "aero-pay": AeroPayImg1Url.src,
  "chevron-default": ChevronDefaultUrl.src,
}

const Icon: React.FC<Props> = ({ icon, ...props }) => {
  return <img src={icons[icon]} alt={icon} {...props} />
}
export default Icon
