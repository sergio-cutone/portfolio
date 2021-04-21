import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`

const PageTemplate = ({ data }) => {
  const page = data.wpgraphql.page
  return (
    <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: page.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
    </>
  )
}

export default PageTemplate
