import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 400,
        padding: `1.25rem 1.0875rem`,
      }}
    >
    
      {/* <Image /> */}
      <li></li>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
