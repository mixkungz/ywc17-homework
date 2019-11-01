import React from 'react'

import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'


const FooterContactContainer = styled.footer`
  padding: 44px 30px;
  background-color: #FAFAFA;
`
const SecondFooterContainer = styled.footer`
  padding: 20px 0 0 0;
  background-color: #213A8F;
  color: white;
  
  a {
    color: white;
  }
`
const Logo = styled.img`
  width: 100%;
  max-width: 145px;
  @media (min-width: 576px) {
    max-width: 108px;
  }
`
const Title = styled.p`
  margin: 15px 0px 10px 0px;
  color: #E6332A;
`
const NoWrap = styled.span`
  white-space: nowrap;
`
const Detail = styled.p`
  font-family: 'TATSanaChon';
  font-weight: bold;
  font-size: 12px;
  padding-left: 15px;

  @media (min-width: 768px) {
    font-size: 14px;
    padding-left: 0;
  }
`
const Footer = () => {
  const image = useStaticQuery(graphql`
    query FooterQuery {
      logo: file(relativePath: { eq: "logo-transparent.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section data-cy='footer'>
      <FooterContactContainer>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3} className='d-md-flex align-items-md-center'>
              <Logo src={image.logo.childImageSharp.fluid.src} />
            </Col>
            <Col xs={12} sm={4} md={3}>
              <Title>ข้อมูลลงทะเบียนประชาชน</Title>
              <p>การรับสิทธิ การใช้งานแอปพลิเคชั่น 
                <NoWrap>“เป๋าตัง”</NoWrap> และ <NoWrap>“ถุงเงิน”</NoWrap> 
                ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร. <a href='tel:021111144' className='text-dark' data-cy='ktb-phonenumber'><NoWrap>0 2111 1144</NoWrap></a>
              </p>
            </Col>
            <Col xs={12} sm={4} md={3}>
              <Title>ข้อมูลลงทะเบียนผู้ประกอบการ</Title>
              <p>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ <br />ติดต่อ โทร. <a href='tel:022706400' className='text-dark' data-cy='cgd-phonenumber'><NoWrap>0 2270 6400 กด 7</NoWrap></a>
              </p>
            </Col>
            <Col xs={12} sm={4} md={3}>
              <Title>ข้อมูลเที่ยวชิมช้อปใช้</Title>
              <p>ติดต่อ ททท.<br />โทร. <a href='tel:1672' className='text-dark' data-cy='tat-phonenumber'><NoWrap>1672</NoWrap></a>
              </p>
            </Col>
          </Row>
        </Container>
      </FooterContactContainer>
      <SecondFooterContainer>
        <Container fluid>
          <Container>
            <Row>
              <Col xs={12} md={3}>
                <Detail>Copyright © 2003-2019</Detail>
              </Col>
              <Col xs={12} md={3}>
                <Detail><a href='https://regist.ชิมช้อปใช้.com/Register/'>ลงทะเบียนเข้าร่วมมาตรการ</a></Detail>
              </Col>
              <Col xs={12} md={3}>
                <Detail><a href='https://www2.ชิมช้อปใช้.com/howto-register'>ขั้นตอนการเข้าร่วมทั้งหมด</a></Detail>
              </Col>
              <Col xs={12} md={3}>
                <Detail><a href='https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province'>รายชื่อร้านค้าที่เข้าร่วมรายการ</a></Detail>
              </Col>
            </Row>
          </Container>
        </Container>
      </SecondFooterContainer>
    </section>
  )
} 

export default Footer
