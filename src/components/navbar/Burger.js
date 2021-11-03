import React from "react"
import useWidth from "../../hooks/useWidth"

const Burger = ({ setToggle, toggleMenu }) => {
  const { width } = useWidth()

  const handleToggle = () => setToggle(!toggleMenu)
  return (
    width < 900 && (
      <button className="hamburger" onClick={handleToggle}>
        <div />
        <div />
        <div />
      </button>
    )
  )
}

export default Burger
