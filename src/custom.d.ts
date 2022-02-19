declare module "src/assets/*.svg" {
  import React from "react"
  const component: React.FC<React.SVGProps<SVGSVGElement>>

  export default component
}

declare module "src/assets/*.svg?url" {

  export default string
}
