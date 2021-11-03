import React from "react"
import { Helmet as Hel } from "react-helmet"
const Helmet = () => {
  return (
    <Hel>
      <title>Ariel Zilist</title>
      <meta name="description" content="This is some metadata!" />
      <meta name="keywords" content="design, chicago" />
    </Hel>
  )
}

export default Helmet
