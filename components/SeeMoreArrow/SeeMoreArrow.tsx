import { Link } from "@chakra-ui/react"
import { Reveal } from "components"
import "./arrow.css"

interface Classnames {
  reveal?: string
  arrowUL?: string
  arrowLI?: string
  animatedArrow?: string
  mainArrow?: string
  text?: string
  theArrow?: string
  shaft?: string
}

interface SeeMoreArrowProps {
  text: string
  href: string
  RevealProps?: string[]
  delay?: number
  classNames?: Classnames
}

const SeeMoreArrow = ({ text, href, RevealProps, delay, classNames }: SeeMoreArrowProps) => {
  return (
    <Reveal {...RevealProps} animationdirection="left" delay={delay || 0.1} className={classNames?.reveal}>
      <ul className={`arrowUL ${classNames?.arrowUL}`}>
        <li className={`${classNames?.arrowLI ? classNames.arrowLI : "arrowLI"}`}>
          <Link className={`animated-arrow ${classNames?.animatedArrow}`} href={href}>
            <span className={`mainArrow ${classNames?.mainArrow}`}>
              <span id="text" className={`text ${classNames?.text}`}>
                {text}
              </span>
              <span className={`the-arrow -right ${classNames?.theArrow}`}>
                <span className={`shaft ${classNames?.shaft}`} />
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </Reveal>
  )
}

export default SeeMoreArrow
