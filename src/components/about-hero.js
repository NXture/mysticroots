import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  return (
    <Section>
      <Container>
        <SuperHeading className={styles.aboutHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text1 && (
          <Text className={styles.aboutHeroText}>{props.text1}</Text>
        )}
        {props.text2 && (
          <Text className={styles.aboutHeroText}>{props.text2}</Text>
        )}
      </Container>
      <Container width="wide">
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text1
    text2
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
