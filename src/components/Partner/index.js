import React from 'react'

import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Container as UnStyledContainer, Row, Col } from 'react-bootstrap'

const Image = styled.img`
  width: 100%;
  max-width: 56px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.55s ease-in-out;
  }

  @media (min-width: 768px) {
    max-width: 102px;
  }
`

const Container = styled(UnStyledContainer)`
  margin: 80px auto;
`

const Partner = () => {
  const image = useStaticQuery(graphql`
    query PartnerQuery {
      MOF: file(relativePath: { eq: "MOF.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      FPO: file(relativePath: { eq: "FPO.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      CGD: file(relativePath: { eq: "CGD.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      KTB: file(relativePath: { eq: "Krungthai.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      MOTS: file(relativePath: { eq: "MOTS.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      TAT: file(relativePath: { eq: "TAT.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
    }
  `)
  return (
    <Container>
      <Row data-cy='partner-list'>
        <Col xs={4} md={2} className='text-center'>
          <a href='https://www.mof.go.th/th/home' target='_blank' rel='noopener noreferrer'>
            <Image src={image.MOF.childImageSharp.fluid.srcWebp} alt='กระทรวงการคลัง' />
          </a>
        </Col>
        <Col xs={4} md={2} className='text-center'>
          <a href='http://www.fpo.go.th/main' target='_blank' rel='noopener noreferrer'>
            <Image src={image.FPO.childImageSharp.fluid.srcWebp} alt='สำนักงานเศรษฐกิจ กระทรวงการคลัง' />
          </a>
        </Col>
        <Col xs={4} md={2} className='text-center'>
          <a href='https://www.cgd.go.th/' target='_blank' rel='noopener noreferrer'>
            <Image src={image.CGD.childImageSharp.fluid.srcWebp} alt='กรมบัญชีกลาง' />
          </a>
        </Col>
        <Col xs={4} md={2} className='text-center'>
          <a href='https://www.ktb.co.th/th/personal' target='_blank' rel='noopener noreferrer'>
            <Image src={image.KTB.childImageSharp.fluid.srcWebp} alt='ธนาคารกรุงไทย' />
          </a>
        </Col>
        <Col xs={4} md={2} className='text-center'>
          <a href='https://www.mots.go.th/' target='_blank' rel='noopener noreferrer'>
            <Image src={image.MOTS.childImageSharp.fluid.srcWebp} alt='กระทรวงการท่องเที่ยวและกีฬา' />
          </a>
        </Col>
        <Col xs={4} md={2} className='text-center'>
          <a href='https://landing.tourismthailand.org/' target='_blank' rel='noopener noreferrer'>
            <Image src={image.TAT.childImageSharp.fluid.srcWebp} alt='กระทรวงการท่องเที่ยวแห่งประเทศไทย' />
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Partner
