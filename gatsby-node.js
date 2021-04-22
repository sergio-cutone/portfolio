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
      }
    }
  `)

  const kiosk_result = await graphql(`
    {
      wpgraphql {
        kiosks {
          nodes {
            id
            uri
          }
        }
      }
    }
  `)

  const website_result = await graphql(`
    {
      wpgraphql {
        websites {
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

  // pull the kiosk data out of the query response
  const kiosks = kiosk_result.data.wpgraphql.kiosks.nodes

  // loop through WordPress kiosk and create a Gatsby page for each one
  kiosks.forEach(kiosk => {
    actions.createPage({
      path: kiosk.uri,
      component: require.resolve("./src/templates/kiosk-template.js"),
      context: {
        id: kiosk.id,
      },
    })
  })

  // pull the website data out of the query response
  const websites = website_result.data.wpgraphql.websites.nodes

  // loop through WordPress kiosk and create a Gatsby page for each one
  websites.forEach(website => {
    actions.createPage({
      path: website.uri,
      component: require.resolve("./src/templates/website-template.js"),
      context: {
        id: website.id,
      },
    })
  })
}
