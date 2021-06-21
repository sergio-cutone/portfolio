import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"
import { SRLWrapper } from "simple-react-lightbox"
import Images from "../Components/Images"
import { CogIcon } from "@heroicons/react/solid"
import KiosksDD from "../Components/KiosksDD"
import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      kiosk(id: $id) {
        title
        content
        slug
        titleImg
      }
    }
  }
`

const KioskTemplate = ({ data }) => {
  const kiosk = data.wpgraphql.kiosk
  const urlEndpoint = `https://demos.sergiocutone.com/api/imagekit?kiosks/${kiosk.slug}`
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
    <Layout>
      <div className={kiosk.slug}>
        <div className="text-right mb-5">
          <KiosksDD />
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: kiosk.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: kiosk.content }} />
        {images.length === 0 && (
          <div>
            <CogIcon className="animate-spin h-10 inline" /> Processing...
          </div>
        )}
        <SRLWrapper>
          <div className="grid sm:grid-cols-2 gap-9 kiosk">
            <Images images={images} alt={kiosk.title.toUpperCase()} />
          </div>
        </SRLWrapper>
      </div>
    </Layout>
  )
}

export default KioskTemplate
