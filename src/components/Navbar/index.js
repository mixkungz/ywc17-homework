import React from 'react'

import styled from 'styled-components'
import { Navbar as UnStyleNavbar, Nav } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 38px;
`
const NavLink = styled(Nav.Link)`
  color: #333 !important;
  font-family: 'TATSanaChon';
  font-weight: bold;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 6px;
    left: 0;
    bottom: -8px;
    background-color: #213A8F;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    color: #213A8F !important;
    &:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`
const Navbar = styled(UnStyleNavbar)`
  height: 60px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
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
      <Navbar.Brand href="#home" className='d-md-none py-0'>
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
          <NavLink href="https://regist.ชิมช้อปใช้.com/Register/">ลงทะเบียนเข้าร่วมมาตรการ</NavLink>
          <NavLink href="https://www2.ชิมช้อปใช้.com/howto-register">ขั้นตอนการเข้าร่วม</NavLink>
          <NavLink href="https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province">ร้านค้าที่เข้าร่วม</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default WebNavbar
