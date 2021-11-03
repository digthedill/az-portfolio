import React from "react"
import useWidth from "../../hooks/useWidth"

const DesktopMenu = () => {
  const { width } = useWidth()

  return (
    <nav className="nav-container">
      {width > 900 && (
        <ul className="desktop-ul">
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

export default DesktopMenu
