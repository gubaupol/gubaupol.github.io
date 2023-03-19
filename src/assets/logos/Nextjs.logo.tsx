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
      d="M239.234.138c-1.101.1-4.605.45-7.758.7-72.721 6.556-140.838 45.788-183.98 106.088-24.023 33.528-39.388 71.56-45.194 111.843C.25 232.831 0 236.984 0 256.05s.25 23.219 2.302 37.281c13.914 96.13 82.33 176.897 175.121 206.822 16.616 5.354 34.134 9.007 54.053 11.209 7.758.851 41.29.851 49.048 0 34.384-3.803 63.512-12.31 92.24-26.972 4.404-2.252 5.255-2.853 4.655-3.353-.401-.3-19.169-25.471-41.691-55.897l-40.94-55.295-51.3-75.913c-28.228-41.735-51.45-75.863-51.651-75.863-.2-.05-.4 33.678-.5 74.862-.15 72.11-.2 75.012-1.101 76.713-1.301 2.452-2.302 3.453-4.405 4.554-1.601.801-3.002.951-10.56.951h-8.658l-2.303-1.451a9.365 9.365 0 0 1-3.353-3.653l-1.051-2.252.1-100.333.15-100.384 1.552-1.951c.801-1.051 2.502-2.402 3.704-3.053 2.052-1.001 2.852-1.101 11.511-1.101 10.21 0 11.911.401 14.564 3.303.751.801 28.528 42.635 61.76 93.027a230072.203 230072.203 0 0 0 100.999 152.977l40.54 61.401 2.052-1.351c18.167-11.81 37.386-28.624 52.601-46.138 32.382-37.181 53.252-82.519 60.259-130.859C511.75 279.269 512 275.116 512 256.05s-.25-23.219-2.302-37.281c-13.914-96.13-82.331-176.897-175.121-206.821-16.366-5.305-33.783-8.958-53.302-11.16-4.805-.5-37.887-1.05-42.041-.65Zm104.802 154.828c2.402 1.201 4.354 3.503 5.055 5.905.4 1.301.5 29.124.4 91.826l-.15 89.975-15.865-24.32-15.916-24.32v-65.405c0-42.285.2-66.054.501-67.205.8-2.803 2.552-5.005 4.954-6.306 2.052-1.05 2.803-1.151 10.661-1.151 7.407 0 8.708.101 10.36 1.001Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
