import React from "react"
import styled from "styled-components"
import { Container } from "./Container"
import iconMoneySrc from "../assets/icon_Money.svg"

const Wrapper = styled.div`
  color: white;
`
const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  justify-content: space-between;
`

const IconBlock = styled.div`
  display: flex;
  align-items: center;
`

const IconMoney = styled.img`
  height: 30px;
`

const IconTitle = styled.h1`
  color: white;
  font-weight: bold;
  margin-left: 40px;
  line-height: 59px;
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
