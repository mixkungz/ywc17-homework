import React from 'react'

import styled from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 38px;
`
const WebNavbar = () => {
  const image = useStaticQuery(graphql`
    query NavbarQuery {
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
    <Navbar bg="light" expand="md" fixed='top'>
      <Navbar.Brand href="#home" className='d-md-none'>
        <Logo src={image.logo.childImageSharp.fluid.src} alt='ชิม-ช้อป-ใช้ โลโก้' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="sr-only">Toggle navigation</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="text-right text-md-center mx-md-auto" data-cy='menu'>
          <Nav.Link href="https://regist.ชิมช้อปใช้.com/Register/">ลงทะเบียนเข้าร่วมมาตรการ</Nav.Link>
          <Nav.Link href="https://www2.ชิมช้อปใช้.com/howto-register">ขั้นตอนการเข้าร่วม</Nav.Link>
          <Nav.Link href="https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province">ร้านค้าที่เข้าร่วม</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default WebNavbar
