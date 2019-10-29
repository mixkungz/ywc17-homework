import React, { Fragment } from "react"

import { Container } from 'react-bootstrap'

import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'


const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Navbar />
    <Container fluid>
      <Hero />
    </Container>
  </Fragment>
)

export default IndexPage
