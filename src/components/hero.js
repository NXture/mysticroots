import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui" //ButtonList
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { anchorLink } from "./header.css"
import { homeButton } from "./ui.css"

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex gap={2} variant="responsive">
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <div>
              <AnchorLink to="/#contact-us" className={anchorLink}>
                <Button>Contact Us</Button>
              </AnchorLink>
              <AnchorLink to="/#explore" className={anchorLink}>
                <Button className={homeButton}>Explore</Button>
              </AnchorLink>
            </div>
            {/* <ButtonList links={props.links} /> */}
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
