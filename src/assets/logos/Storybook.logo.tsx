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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m355.867 4.91-2.413 58.023a3.841 3.841 0 0 0 6.158 3.219l22.539-17.098 19.037 14.997a3.84 3.84 0 0 0 6.214-3.15l-2.064-59.084L433.601.051c14.19-.887 26.411 9.897 27.298 24.086.033.535.05 1.07.05 1.606v460.515c0 14.217-11.525 25.742-25.742 25.742-.385 0-.77-.009-1.155-.026L90.448 496.542c-13.382-.601-24.066-11.365-24.569-24.751L50.02 49.175c-.524-13.957 10.178-25.786 24.118-26.657l281.73-17.609Zm10.97 186.25c-9.056 7.035-76.516 11.835-76.516 1.82 1.425-38.216-15.684-39.891-25.189-39.891-9.03 0-24.238 2.729-24.238 23.202 0 20.863 22.225 32.641 48.312 46.465 37.058 19.638 81.909 43.406 81.909 103.214 0 57.324-46.576 88.989-105.983 88.989-61.308 0-114.885-24.804-108.834-110.8 2.376-10.098 80.318-7.698 80.318 0-.95 35.486 7.129 45.923 27.565 45.923 15.684 0 22.813-8.644 22.813-23.202 0-22.033-23.157-35.034-49.796-49.99-36.07-20.251-78.524-44.087-78.524-98.779 0-54.594 37.545-90.99 104.557-90.99 67.011 0 103.606 35.838 103.606 104.039Z"
      fill="#000"
    />
  </svg>
)

export default SvgComponent
