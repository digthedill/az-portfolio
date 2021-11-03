import React from "react"
import "../../styles/navbar.scss"

import Burger from "./Burger"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

//todo------
// create mobile view with close functionality and use click off screen

const Navbar = ({ toggleMenu, setToggle }) => {
  const sideBar = {
    position: "fixed",
    left: "0",
    top: "1px",
  }
  const sidebarStyles = toggleMenu
    ? {
        ...sideBar,
        background: "lightCoral",
        width: "200px",
        height: "100vh",
        textAlign: "center",
      }
    : {
        ...sideBar,
      }
  return (
    <>
      <DesktopMenu />

      <div style={sidebarStyles}>
        <Burger setToggle={setToggle} toggleMenu={toggleMenu} />
        <MobileMenu toggleMenu={toggleMenu} setToggle={setToggle} />
      </div>
    </>
  )
}

export default Navbar
