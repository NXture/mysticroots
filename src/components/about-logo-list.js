import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading, FlexList, Section, Text, Box } from "./ui"
import { LogoItem } from "./logo-list"

export default function AboutLogoList(props) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.subtext && <Text>{props.subtext}</Text>}
        </Box>
      </Container>
      <Container width="narrow">
        <Box paddingY={6}>
          <FlexList gap={5} variant="center">
            {props.logos.map((logo, i) => (
              <li key={`${logo.id}-${i}`}>
                <LogoItem {...logo} />
              </li>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutLogoListContent on AboutLogoList {
    id
    heading
    subtext
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
