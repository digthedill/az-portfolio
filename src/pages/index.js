import React, { useState } from "react"
import "../styles/main.scss"
import useWidth from "../hooks/useWidth"

//pages
import HomePage from "../components/pages/HomePage"
import WorkPage from "../components/pages/WorkPage"
import AboutPage from "../components/pages/AboutPage"

//components
import Navbar from "../components/navbar"
// import Helmet from "../components/Helmet"

const IndexPage = () => {
  const { width } = useWidth()
  const [toggleMenu, setToggle] = useState(false)
  console.log(toggleMenu)

  // screens < 850px && > 500px
  const containerStyles =
    toggleMenu && width < 900 && width > 500
      ? {
          marginLeft: "200px",
          paddingLeft: "0.5rem",
        }
      : {
          maxWidth: "750px",
          margin: "auto",
        }

  return (
    <>
      <Navbar toggleMenu={toggleMenu} setToggle={setToggle} />
      <main style={containerStyles}>
        <HomePage />
        <WorkPage />
        <AboutPage />
      </main>
    </>
  )
}

export default IndexPage
