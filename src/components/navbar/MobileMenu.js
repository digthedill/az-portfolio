import React from "react"

import useWidth from "../../hooks/useWidth"

const MobileMenu = ({ toggleMenu }) => {
  const { width } = useWidth()

  return (
    <nav>
      {width < 900 && toggleMenu && (
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default MobileMenu
