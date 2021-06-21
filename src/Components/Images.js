import React from "react"

const Images = ({ images, alt }) => {
  return (
    <>
      {images.map((e, i) => (
        <img
          className="cursor-pointer img-hover break-inside"
          src={e.url}
          alt={alt}
          key={i}
        />
      ))}
    </>
  )
}

export default Images
