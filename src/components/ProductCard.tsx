import React from "react"
import styled from "styled-components"
import imgSrc from "../assets/Nikon P900@2x.png"

const CardWrapper = styled.div`
  border-radius: 30px 0 0 30px;
  background: rgba(56, 79, 250, 0.8);
  min-width: 401px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
`

const CardContent = styled.div`
  padding: 31px 40px;
  /* background: pink; */
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  width: 292px;
`

const ImageBlock = styled.div`
  width: 140px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;
  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
`

const Row = styled.div`
  width: 292px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
  &:last-child {
    font-size: 20px;
    font-weight: bold;
  }
`

export const ProductCard = () => (
  <CardWrapper>
    <CardContent>
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
    </CardContent>
  </CardWrapper>
)
