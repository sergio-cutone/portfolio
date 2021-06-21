import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SimpleReactLightbox from "simple-react-lightbox"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "@fontsource/montserrat"
import "@fontsource/montserrat/700.css"
import "@fontsource/open-sans"
import "@fontsource/open-sans/700.css"

const Layout = ({ children }) => {
  const menu = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
        }
        menu(id: "dGVybToy") {
          menuItems {
            nodes {
              id
              label
              url
            }
          }
        }
      }
    }
  `)

  const { title, url } = menu.wpgraphql.generalSettings
  // loop through the menu items and make the links relative
  const items = menu.wpgraphql.menu.menuItems.nodes.map(item => ({
    ...item,
    url: item.url.replace(url, ""),
  }))
  return (
    <div className="max-w-screen-xl mx-auto p-3 mt-24 sm:mt-28">
      <Header title={title} items={items} />
      <SimpleReactLightbox>
        <main className="max-w-screen-xl mx-auto leading-8 text-md sm:text-lg sm:leading-10 px-4 py-12">
          {children}
        </main>
      </SimpleReactLightbox>
      <Footer />
    </div>
  )
}

export default Layout
