import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      website(id: $id) {
        title
        content
      }
    }
  }
`

const WebsiteTemplate = ({ data }) => {
  const website = data.wpgraphql.website
  return (
    <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: website.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: website.content }} />
      </Layout>
    </>
  )
}

export default WebsiteTemplate
