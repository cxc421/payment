import React from "react"
import styled from "styled-components"
import { Container } from "./Container"
import iconMoneySrc from "../assets/icon_Money.svg"
import { mobileSize } from "../constants/device"

const Wrapper = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #162fe8;

  @media screen and (max-width: ${mobileSize}) {
    position: static;
  }
`
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 61px;
  justify-content: space-between;

  @media screen and (max-width: ${mobileSize}) {
    padding-top: 20px;
    padding-bottom: 14px;
  }
`

const IconBlock = styled.div`
  display: flex;
  align-items: center;
`

const IconMoney = styled.img`
  height: 30px;

  @media (max-width: ${mobileSize}) {
    height: 25px;
  }
`

const IconTitle = styled.h1`
  color: white;
  font-weight: bold;
  margin-left: 40px;
  line-height: 59px;
  font-size: 40px;
  line-height: 59px;

  @media (max-width: ${mobileSize}) {
    font-size: 24px;
    line-height: 36px;
    margin-left: 15px;
  }
`

const CancelBtn = styled.div`
  font-size: 16px;
  color: white;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
`

export const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <IconBlock>
        <IconMoney src={iconMoneySrc} alt="money-icon" />
        <IconTitle>Payment</IconTitle>
      </IconBlock>
      <CancelBtn>Cancel</CancelBtn>
    </HeaderContainer>
  </Wrapper>
)
