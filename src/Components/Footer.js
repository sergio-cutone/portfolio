import React from "react"
import wordpress from "../img/wordpress.png"
import gatsby from "../img/gatsby.png"
import tailwindcss from "../img/tailwindcss.png"
import python from "../img/python.png"
import imagekit from "../img/imagekit.png"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="px-4 py-8 text-center border-t border-gray-500">
      {year} Sergio Cutone
      <div className="text-center">
        <img
          src={wordpress}
          alt="Wordpress"
          title="Wordpress"
          className="inline h-10"
        />
        <img src={gatsby} alt="Gatsby" title="Gatsby" className="inline h-10" />
        <img
          src={tailwindcss}
          alt="Tailwind CSS"
          title="Tailwind CSS"
          className="inline h-10"
        />
        <img
          src={imagekit}
          alt="Imagekit IO"
          title="Imagekit IO"
          className="inline h-10"
        />
        <img src={python} alt="Python" title="Python" className="inline h-10" />
      </div>
    </div>
  )
}

export default Footer
