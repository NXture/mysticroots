import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function GatsbyContentfulLogo() {
  return (
    <StaticImage
      src="../logo.png"
      alt="A dinosaur"
      layout="fixed"
      quality={100}
      width={210}
    />
  )
}
