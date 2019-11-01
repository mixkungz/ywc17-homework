import React, { Fragment } from "react"

import useSWR from 'swr'
import { Container } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Information from '../components/Information'
import Contact from '../components/Contact'
import Partner from '../components/Partner'
import Footer from '../components/Footer'
import { GlobalStyle } from '../components/GlobalStyle'
import fetch from '../libs/fetch'


const IndexPage = () => {
  const { data } = useSWR('https://panjs.com/ywc.json', fetch)
  return (
    <Fragment>
      <SEO title='มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”' />
      <GlobalStyle />
      <Navbar data={data} />
      <Container fluid>
        <Hero />
        <Information data={data} />
        <LazyLoadComponent threshold={400}>
          <Contact />
          <Partner />
        </LazyLoadComponent>
      </Container>
      <LazyLoadComponent threshold={500}>
        <Footer />
      </LazyLoadComponent>
    </Fragment>
  )
}

export default IndexPage
