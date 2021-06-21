import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      webapp(id: $id) {
        title
        content
        slug
      }
    }
  }
`

const WebappTemplate = ({ data }) => {
  const webapp = data.wpgraphql.webapp
  //   const urlEndpoint = `https://demos.sergiocutone.com/api/imagekit?websites/${webapp.slug}`
  //   const [images, imagesState] = useState([])

  //   useEffect(() => {
  //     async function fetchImages() {
  //       let response = await fetch(urlEndpoint)
  //       response = await response.json()
  //       imagesState(response)
  //     }
  //     fetchImages()
  //   }, [urlEndpoint])
  return (
    <>
      <Layout>
        <div className={webapp.slug}>
          <h1 dangerouslySetInnerHTML={{ __html: webapp.title }}></h1>
          <div dangerouslySetInnerHTML={{ __html: webapp.content }} />
        </div>
      </Layout>
    </>
  )
}

export default WebappTemplate
