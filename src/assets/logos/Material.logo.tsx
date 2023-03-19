import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M431.543 337.214a14.223 14.223 0 0 0 7.139-12.288l.256-82.307a14.225 14.225 0 0 1 7.14-12.288l44.617-25.629A14.22 14.22 0 0 1 512 217.033v149.636A14.22 14.22 0 0 1 504.86 379l-168.381 96.714a14.226 14.226 0 0 1-14.138.014l-132.142-75.579a14.223 14.223 0 0 1-7.168-12.345v-75.451c0-.086.099-.142.185-.1.071.043.17 0 .17-.099v-.086c0-.057.029-.114.086-.142l108.831-62.523c.1-.056.057-.213-.057-.213a.114.114 0 0 1-.113-.114l.213-73.972a14.223 14.223 0 0 0-21.334-12.373l-80.884 46.607a14.22 14.22 0 0 1-14.194 0l-81.14-46.721a14.225 14.225 0 0 0-21.32 12.317v133.692a14.222 14.222 0 0 1-21.277 12.36L7.168 295.243A14.223 14.223 0 0 1 0 282.869L.398 49.192a14.223 14.223 0 0 1 21.306-12.303l154.244 88.593a14.222 14.222 0 0 0 14.166 0l154.201-88.593a14.224 14.224 0 0 1 21.306 12.345V282.97a14.222 14.222 0 0 1-7.126 12.331l-80.756 46.508a14.221 14.221 0 0 0 .057 24.676l44.545 25.359a14.22 14.22 0 0 0 14.123-.029l95.079-54.6Zm9.344-209.67a14.221 14.221 0 0 0 21.533 12.189l42.668-25.601A14.223 14.223 0 0 0 512 101.943V49.775A14.22 14.22 0 0 0 490.467 37.6l-42.668 25.6a14.224 14.224 0 0 0-6.912 12.19v52.168-.014Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
