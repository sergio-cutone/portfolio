import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import WebsitesDD from "../Components/WebsitesDD"
import { SRLWrapper } from "simple-react-lightbox"
import { CogIcon } from "@heroicons/react/solid"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      website(id: $id) {
        title
        content
        slug
      }
    }
  }
`

const WebsiteTemplate = ({ data }) => {
  const website = data.wpgraphql.website
  const urlEndpoint = `https://demos.sergiocutone.com/api/imagekit?${website.slug}`
  const [images, imagesState] = useState([])

  const fetchImages = async () => {
    let response = await fetch(
      "https://portfolio.sergiocutone.com/wp-content/themes/sergiocutone/webdevelopment.json"
    )
    response = await response.json()
    imagesState(response)
  }

  useEffect(() => {
    fetchImages()
  }, [urlEndpoint])
  return (
    <Layout>
      <div className={website.slug}>
        <div className="text-right mb-5">
          <WebsitesDD />
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: website.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: website.content }} />
        <SRLWrapper>
          {images.length === 0 && (
            <div>
              <CogIcon className="animate-spin h-10 inline" /> Processing...
            </div>
          )}
          {images.map(
            e =>
              e.slug === website.slug && (
                <div className="text-center">
                  <img
                    src={e.title_img}
                    alt="Main"
                    className="cursor-pointer hover:opacity-70 transition duration-700"
                  />
                  <div className="grid grid-cols-3 my-10">
                    <img
                      src={e.mobi1}
                      alt="Mobile 1"
                      className="cursor-pointer hover:opacity-70 transition duration-700"
                    />
                    <img
                      src={e.mobi2}
                      alt="Mobile 2"
                      className="cursor-pointer hover:opacity-70 transition duration-700"
                    />
                    <img
                      src={e.mobi3}
                      alt="Mobile 3"
                      className="cursor-pointer hover:opacity-70 transition duration-700"
                    />
                  </div>
                  <img
                    src={e.desktop1}
                    alt="Desktop 1"
                    className="shadow-xl mb-10 cursor-pointer hover:opacity-70 transition duration-700"
                  />
                  <img
                    src={e.desktop2}
                    alt="Desktop 2"
                    className="shadow-xl cursor-pointer hover:opacity-70 transition duration-700"
                  />
                </div>
              )
          )}
        </SRLWrapper>
      </div>
    </Layout>
  )
}

export default WebsiteTemplate
