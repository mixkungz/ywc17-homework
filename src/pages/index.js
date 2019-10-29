import React, { Fragment } from "react"

import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/Navbar'

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Navbar />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Fragment>
)

export default IndexPage
