import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { MenuIcon, XIcon } from "@heroicons/react/solid"

const Header = ({ title, items }) => {
  const [menuToggle, menuToggleState] = useState(true)
  const handleToggleMenu = () => {
    menuToggleState(!menuToggle)
  }
  const [isVisible, isVisibleState] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        isVisibleState(true)
      } else {
        isVisibleState(false)
      }
    }
    window.addEventListener("scroll", toggleVisible)
  }, [])
  return (
    <>
      <header
        className={`z-50 bg-white p-3 fixed w-full top-0 left-0 grid md:grid-cols-2 md:place-content-center md:auto-cols-max ${
          isVisible && "shadow-md"
        }`}
      >
        <div>
          <Link
            to="/"
            className="home text-black border-2 py-4 px-5 sm:px-10 sm:py-5 font-bold text-center leading-0 hover:bg-gray-100"
          >
            <div className="text-xl sm:text-3xl uppercase">{title}</div>
            <div className="text-sm">SENIOR WEB DEVELOPER</div>
          </Link>
        </div>
        <div className="menu text-right flex flex-wrap content-center justify-end">
          <MenuIcon
            className="border rounded border-black p-2 h-10 md:hidden block cursor-pointer hover:bg-gray-100 absolute top-3 right-3"
            onClick={() => handleToggleMenu()}
          />
          <div
            className={`transition-all duration-700 md:duration-75 md:pt-0 ease-in-out md:block fixed md:relative h-screen md:h-auto w-full md:w-auto bg-white md:bg-transparent text-left ${
              menuToggle
                ? "top-0 left-full md:left-0 md:top-0 pt-14"
                : "top-0 left-0 md:left-0 md:top-0 pt-14"
            }`}
          >
            <XIcon
              className="absolute top-3 right-3 h-7 z-50 text-black block md:hidden cursor-pointer"
              onClick={() => handleToggleMenu()}
            />
            {items.map(item => (
              <Link
                key={item.url}
                to={item.url}
                className="md:ml-3 block md:inline p-3 md:p-0 border-b md:border-b-0 border-gray-200 hover:bg-gray-200 md:hover:bg-transparent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {isVisible && (
        <div className="fixed bottom-4 right-4 h-10 w-10 z-50 rounded text-gray-900 bg-gray-300 hover:bg-gray-900 hover:text-gray-300 justify-center justify-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={scrollToTop}
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  )
}

export default Header
