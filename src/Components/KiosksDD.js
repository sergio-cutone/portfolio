import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Kiosks = () => {
  const query = useStaticQuery(graphql`
    {
      wpgraphql {
        kiosks(first: 99) {
          nodes {
            title
            uri
          }
        }
      }
    }
  `)
  const kiosks = query.wpgraphql.kiosks.nodes
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
        {kiosks
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((e, i) => (
            <option value={e.uri} key={`kiosk-${i}`}>
              {e.title}
            </option>
          ))}
      </select>
    </>
  )
}

export default Kiosks
