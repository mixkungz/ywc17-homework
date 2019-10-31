import React, { Fragment } from "react"

import { Container } from 'react-bootstrap'

import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Contact from '../components/Contact'
import Partner from '../components/Partner'


const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Navbar />
    <Container fluid>
      <Hero />
      <Information />
      <Contact />
      <Partner />
    </Container>
  </Fragment>
)

export default IndexPage
