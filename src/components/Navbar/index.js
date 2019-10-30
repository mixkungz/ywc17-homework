import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const WebNavbar = () => (
  <Navbar bg="light" expand="md" fixed='top'>
    <Navbar.Brand href="#home" className='d-md-none'>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="text-right text-md-center mx-md-auto" data-cy='menu'>
        <Nav.Link href="https://regist.ชิมช้อปใช้.com/Register/">ลงทะเบียนเข้าร่วมมาตรการ</Nav.Link>
        <Nav.Link href="https://www2.ชิมช้อปใช้.com/howto-register">ขั้นตอนการเข้าร่วม</Nav.Link>
        <Nav.Link href="https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province">ร้านค้าที่เข้าร่วม</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default WebNavbar
