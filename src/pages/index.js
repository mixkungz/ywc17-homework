import React, { Fragment } from "react"

import { Container } from 'react-bootstrap'
import { createGlobalStyle } from 'styled-components'

import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Contact from '../components/Contact'
import Partner from '../components/Partner'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  a {
    &:hover {
      text-decoration: none;
    }
  }
`

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <GlobalStyle />
    <Navbar />
    <Container fluid>
      <Hero />
      <Information />
      <Contact />
      <Partner />
    </Container>
    <Footer />
  </Fragment>
)

export default IndexPage
