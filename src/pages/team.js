import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Team = () => (
  <Layout>
    <SEO title="Attorneys" />
    <h1>Our team of attorneys is ready to win your case. </h1>
    <p>With ofices througth Florida our team is well diverse and prepared to handle your litigation needs.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Team
