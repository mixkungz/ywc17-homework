import React from 'react'

import styled from 'styled-components'
import { Container, Row, Col, Button } from 'react-bootstrap'

const InformationContainer = styled.section`
  font-family: 'TATSanaChon';
  font-weight: bold;
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
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background-color: #FBBC33;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
const Campaign = styled.h2`
  font-size: 24px;
  line-height: 1.6;
  color: red;
  text-align: left;
  margin-top: 70px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`
const Detail = styled.p`
  text-align: left;
  font-size: 16px;
  font-family: 'TATSanaSuksa';
  font-weight: normal;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const CampaignDetail = styled(Detail)`
`

const TermTitle = styled(Detail)`
  font-family: 'TATSanaChon';
  font-weight: bold;
`

const TermDetail = styled(Detail)`
`

const Information = () => (
  <InformationContainer>
    <Container>
      <Row className='text-center'>
        <Col xs={12}>ตั้งแต่วันที่<br/> <Duration data-cy='duration'>27 ก.ย. - 31 ธ.ค. 62</Duration></Col>
        <Col xs={12} md={{span: 10, offset: 1}}>
          <a href='https://regist.ชิมช้อปใช้.com/Register/' target='_blank' rel='noopener noreferrer'>
            <RegisterButton>
              ลงทะเบียน เฟส 2<br/>
              ตั้งแต่วันที่ 24 ต.ค. 62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.<br/>
              (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
            </RegisterButton>
          </a>
        </Col>
        <Col xs={12}>
          <Campaign>
            มาตรการส่งเสริมการบริโภค<br />
            ในประเทศ "ชิมช้อปใช้"
          </Campaign>
          <CampaignDetail></CampaignDetail>
          <TermTitle>เงื่อนไขการเข้าร่วมมาตรการ</TermTitle>
          <TermDetail></TermDetail>
        </Col>
      </Row>
    </Container>
  </InformationContainer>
)

export default Information
