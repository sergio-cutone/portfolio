import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Websites = () => {
  const query = useStaticQuery(graphql`
    {
      wpgraphql {
        websites {
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
        {websites.map((e, i) => (
          <option value={e.uri} key={i}>
            {e.title}
          </option>
        ))}
      </select>
    </>
  )
}

export default Websites
