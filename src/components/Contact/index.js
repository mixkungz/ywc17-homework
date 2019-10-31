import React from 'react'

import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const ContactImage = styled.img`
  width: 80%;
  @media (min-width: 768px) {
    width: 100%;
  }
`
const ContactContainer = styled.section`
  margin: 100px 0;
`

const Contact = () =>  {
  const image = useStaticQuery(graphql`
    query ContactQuery {
      CDG: file(relativePath: { eq: "Banner_CGD_Sq.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      KTB: file(relativePath: { eq: "Banner_KTB_SQ.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      TAT: file(relativePath: { eq: "Banner_TAT_Hotline_Sq.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ContactContainer>
      <Container>
        <Row data-cy='contact-list'>
          <Col xs={12} md={4} className='text-center'>
            <a href='tel:021111144'><ContactImage src={image.CDG.childImageSharp.fluid.src} alt='กรุงไทย' /></a>
          </Col>
          <Col xs={12} md={4} className='text-center'>
            <a href='tel:022706400'><ContactImage src={image.KTB.childImageSharp.fluid.src} alt='กรมบัญชีกลาง' /></a>
          </Col>
          <Col xs={12} md={4} className='text-center'>
            <a href='tel:1672'><ContactImage src={image.TAT.childImageSharp.fluid.src} alt='การท่องเที่ยวแห่งประเทศไทย' /></a>
          </Col>
        </Row>
      </Container>
    </ContactContainer>
  )
}

export default Contact
