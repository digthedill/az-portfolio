import React from "react"
import "../../styles/page-layout.scss"
const PageLayout = ({ children, page }) => {
  return (
    <section className="page-container" id={page}>
      {children}
    </section>
  )
}

export default PageLayout
