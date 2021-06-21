import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import { SRLWrapper } from "simple-react-lightbox"
import Images from "../Components/Images"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        slug
      }
    }
  }
`

const PageTemplate = ({ data }) => {
  const page = data.wpgraphql.page
  const urlEndpoint = `https://demos.sergiocutone.com/api/imagekit?older`
  const [images, imagesState] = useState([])

  useEffect(() => {
    async function fetchImages() {
      let response = await fetch(urlEndpoint)
      response = await response.json()
      imagesState(response)
    }
    fetchImages()
  }, [urlEndpoint])
  return (
    <>
      <Layout>
        <div className={page.slug}>
          <h1
            className="text-4xl font-bold"
            dangerouslySetInnerHTML={{ __html: page.title }}
          ></h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
          {page.slug === "web-development" && (
            <SRLWrapper>
              <div className="masonry before:box-inherit after:box-inherit">
                <Images images={images} />
              </div>
            </SRLWrapper>
          )}
        </div>
      </Layout>
    </>
  )
}

export default PageTemplate
