import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, FlexList, Box, Heading, Text, Space } from "./ui"
import { benefitWrapper } from "./benefit.css"

function Benefit(props) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      {props.image && (
        <GatsbyImage
          alt={props.image.alt}
          image={getImage(props.image.gatsbyImageData)}
        />
      )}
      <Space size={2} />
      <Heading variant="subheadSmall">{props.heading}</Heading>
      <Text>{props.text}</Text>
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>
        <Space size={3} />
        <FlexList
          gutter={3}
          variant="start"
          responsive
          wrap
          className={benefitWrapper}
        >
          {props.content.map((benefit) => (
            <Benefit key={benefit.id} {...benefit} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
