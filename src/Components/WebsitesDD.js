import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Websites = () => {
  const query = useStaticQuery(graphql`
    {
      wpgraphql {
        websites(first: 99) {
          nodes {
            title
            uri
          }
        }
      }
    }
  `)
  const websites = query.wpgraphql.websites.nodes
  const handleChange = event => {
    if (event.target.value) window.location.href = event.target.value
  }
  return (
    <>
      <select
        onBlur={handleChange}
        className="w-24 p-1 -mt-2 border-b border-black"
      >
        <option value="">Jump to</option>
        {websites
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((e, i) => (
            <option value={e.uri} key={`website-${i}`}>
              {e.title}
            </option>
          ))}
      </select>
    </>
  )
}

export default Websites
