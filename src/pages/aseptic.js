import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Aseptic(props) {
  const { asepticPage } = props.data

  return (
    <Layout>
      {asepticPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { asepticPage } = props.data
  return <SEOHead {...asepticPage} />
}

export const query = graphql`
  {
    asepticPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageBenefitListContent
      }
    }
  }
`
