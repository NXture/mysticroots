import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Vegetables(props) {
  const { vegetablesPage } = props.data

  return (
    <Layout>
      {vegetablesPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { vegetablesPage } = props.data
  return <SEOHead {...vegetablesPage} />
}

export const query = graphql`
  {
    vegetablesPage {
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
