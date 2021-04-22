exports.createPages = async ({ actions, graphql }) => {
  // query for WordPress page data
  const result = await graphql(`
    {
      wpgraphql {
        pages {
          nodes {
            id
            uri
          }
        }
        kiosk {
          nodes {
            id
            uri
          }
        }
        website {
          nodes {
            id
            uri
          }
        }
      }
    }
  `)

  // pull the page data out of the query response
  const pages = result.data.wpgraphql.pages.nodes

  // loop through WordPress pages and create a Gatsby page for each one
  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: page.id,
      },
    })
  })

  // pull the page data out of the query response
  const kiosks = result.data.wpgraphql.kiosk.nodes

  // loop through WordPress kiosk and create a Gatsby page for each one
  kiosks.forEach(kiosk => {
    actions.createPage({
      path: kiosk.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: kiosk.id,
      },
    })
  })

  // pull the page data out of the query response
  const websites = result.data.wpgraphql.website.nodes

  // loop through WordPress kiosk and create a Gatsby page for each one
  websites.forEach(website => {
    actions.createPage({
      path: website.uri,
      component: require.resolve("./src/templates/page-template.js"),
      context: {
        id: website.id,
      },
    })
  })
}
