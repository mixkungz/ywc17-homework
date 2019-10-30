import React from 'react'

import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'

const InformationContainer = styled.section`
  padding-top: 26px;
`
const Duration = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #E6332A;

  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (min-width: 992px) {
    font-size: 48px;
  }
`
const RegisterButton = styled(Button)`
  padding: 10px;
  width: 100%;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
  background-color: #213A8F;
  border-radius: 5px;
  border: none;
  
  &:hover {
    background-color: #FBBC33;
    box-shadow: none;
  }
`
const Campaign = styled.h2`
  font-size: 24px;
  line-height: 1.6;
  color: red;
  text-align: left;
  margin-top: 70px;
`

const Information = () => (
  <InformationContainer>
    <Container>
      <Row className='text-center'>
        <Col xs={12}>ตั้งแต่วันที่</Col>
        <Col xs={12}>
          <Duration data-cy='duration'>27 ก.ย. - 31 ธ.ค. 62</Duration>
        </Col>
        <Col xs={12} md={{span: 10, offset: 1}}>
          <RegisterButton>
            ลงทะเบียน เฟส 2<br/>
            ตั้งแต่วันที่ 24 ต.ค. 62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br/>
            (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
          </RegisterButton>
        </Col>
        <Col xs={12}>
          <Campaign>
            มาตรการส่งเสริมการบริโภค<br />
            ในประเทศ "ชิมช้อปใช้"
          </Campaign>
        </Col>
      </Row>
    </Container>
  </InformationContainer>
)

export default Information
