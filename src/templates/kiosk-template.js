import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      kiosk(id: $id) {
        title
        content
      }
    }
  }
`

const KioskTemplate = ({ data }) => {
  const kiosk = data.wpgraphql.kiosk
  return (
    <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: kiosk.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: kiosk.content }} />
      </Layout>
    </>
  )
}

export default KioskTemplate
