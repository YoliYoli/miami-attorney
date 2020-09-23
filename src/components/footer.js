import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer = ({ siteTitle }) => (
  <footer
    style={{
     
      background: `#020132`,
      textAlign: `center`,
      // height: `5rem`,
     color:`white`,
      marginTop: `5rem`,
      padding:`3%`
    }}
  >
    <div>
    <p>MIAMI - FORT LAUDERDALE - WEST PALM BEACH - TAMPA - JACKSONVILLE</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
