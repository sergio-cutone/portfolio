import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Kiosks = () => {
  const query = useStaticQuery(graphql`
    {
      wpgraphql {
        kiosks {
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
    console.log(event.target.value)
    if (event.target.value) window.location.href = event.target.value
  }
  return (
    <>
      <select
        onBlur={handleChange}
        className="w-24 p-1 -mt-2 border-b border-black"
      >
        <option value="">Jump to</option>
        {kiosks.map((e, i) => (
          <option value={e.uri} key={i}>
            {e.title}
          </option>
        ))}
      </select>
    </>
  )
}

export default Kiosks
