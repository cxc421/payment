import React from "react"
import styled from "styled-components"
import imgSrc from "../assets/Nikon P900@2x.png"
import { mobileSize } from "../constants/device"

const CardWrapper = styled.div`
  border-radius: 30px 0 0 30px;
  background: rgba(56, 79, 250, 0.8);
  min-width: 401px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;

  @media (max-width: ${mobileSize}) {
    min-width: none;
    width: 100%;
    border-radius: 30px 30px 0 0;
    height: calc(100vh - 70px);
  }
`

const CardContent = styled.div`
  padding: 31px 40px;
  /* background: pink; */
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${mobileSize}) {
    display: flex;
    padding: 30px 20px;
    flex-direction: row;
    /* justify-content: space-between; */
    justify-content: center;
  }
`

const InfoWrapper = styled.div`
  display: inline-flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  width: 292px;

  @media (max-width: ${mobileSize}) {
    font-size: 16px;
    font-weight: normal;
  }
`

const ImageBlock = styled.div`
  width: 140px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;
  display: block;
  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${mobileSize}) {
    display: none;
  }
`

const MobileImageBlock = styled(ImageBlock)`
  display: none;
  @media (max-width: ${mobileSize}) {
    display: block;
    margin-right: 40px;
    width: 70px;
    border-radius: 10px;
  }
`

const Row = styled.div`
  width: 292px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
  &:last-child {
    font-size: 16px;
    font-weight: bold;
  }
  @media (max-width: ${mobileSize}) {
    margin-top: 12px;
  }
`

export const ProductCard = () => (
  <CardWrapper>
    <CardContent>
      <MobileImageBlock>
        <img src={imgSrc} alt="" />
      </MobileImageBlock>
      <InfoWrapper>
        <Title>Nikon P900 Camera</Title>
        <ImageBlock>
          <img src={imgSrc} alt="" />
        </ImageBlock>
        <Row>
          <span>Price</span>
          <span>$15,900</span>
        </Row>
        <Row>
          <span>Shipping fee</span>
          <span>$60</span>
        </Row>
        <Row>
          <span>Total</span>
          <span>$15,960</span>
        </Row>
      </InfoWrapper>
    </CardContent>
  </CardWrapper>
)
