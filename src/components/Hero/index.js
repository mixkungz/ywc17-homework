import React from 'react'

import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const HeroContainer = styled.section`
  padding-top: 60px;
`
const StyledBackgroundImage = styled(BackgroundImage)`
  height: 221px;
  
  @media (min-width: 576px) {
    height: 242px;
  }
  @media (min-width: 768px) {
    height: 350px;
  }
`
const Img = styled.img`
  max-width: 110px;
  max-height: 131px;
  
  @media (min-width: 768px) {
    max-width: 240px;
    max-height: 280px;
  }
`

const Hero = () => {
  const image = useStaticQuery(graphql`
    query MyQuery {
      heroLeft: file(relativePath: { eq: "hero-left.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      heroCenter: file(relativePath: { eq: "hero-center.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      heroRight: file(relativePath: { eq: "hero-right.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      heroLeftMobile: file(relativePath: { eq: "hero-left-mobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      heroCenterMobile: file(relativePath: { eq: "hero-center-mobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      heroRightMobile: file(relativePath: { eq: "hero-right-mobile.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
    }
  `)
  return (
    <HeroContainer>
      <Row className='d-md-none'>
        <StyledBackgroundImage Tag="div" className='col-4' fluid={image.heroLeftMobile.childImageSharp.fluid} />
        <StyledBackgroundImage Tag="div" className='col-4 d-flex justify-content-center align-items-center px-1' fluid={image.heroCenterMobile.childImageSharp.fluid}>
          <Img src={image.logo.childImageSharp.fluid.src} alt='ชิม-ช้อป-ใช้ โลโก้' />
        </StyledBackgroundImage>
        <StyledBackgroundImage Tag="div" className='col-4' fluid={image.heroRightMobile.childImageSharp.fluid} />
      </Row>
      <Row className='d-none d-md-flex'>
        <StyledBackgroundImage Tag="div" className='col-4' fluid={image.heroLeft.childImageSharp.fluid} />
        <StyledBackgroundImage Tag="div" className='col-4 d-flex justify-content-center align-items-center px-1' fluid={image.heroCenter.childImageSharp.fluid}>
          <Img src={image.logo.childImageSharp.fluid.src} alt='ชิม-ช้อป-ใช้ โลโก้' />
        </StyledBackgroundImage>
        <StyledBackgroundImage Tag="div" className='col-4' fluid={image.heroRight.childImageSharp.fluid} />
      </Row>
    </HeroContainer>
  )
}

export default Hero
