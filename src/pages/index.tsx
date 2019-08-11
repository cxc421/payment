import React, { useState } from "react"
import styled from "styled-components"
import "../global.css"
import { Header } from "../components/Header"
import { Container } from "../components/Container"
import { ProductCard } from "../components/ProductCard"
import { CheckoutCard } from "../components/CheckoutCard"
import { InfoMask } from "../components/InfoMask"
import { mobileSize } from "../constants/device"

const Content = styled.div`
  position: relative;
  top: 160px;
  @media (max-width: ${mobileSize}) {
    top: 0;
  }
`

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: ${mobileSize}) {
    position: absolute;
    left: 0;
  }
`

export default () => {
  const [showMask, setShowMask] = useState(false)
  const [haveError, setHaveError] = useState(false)

  function hideMask() {
    setShowMask(false)
  }

  function onSubmit() {
    setShowMask(true)
    setHaveError(false)
  }

  function onError() {
    setShowMask(true)
    setHaveError(true)
  }

  return (
    <>
      <Header></Header>
      <Content>
        <Container>
          <ContentContainer>
            <ProductCard />
            <CheckoutCard onSubmit={onSubmit} onError={onError} />
          </ContentContainer>
        </Container>
      </Content>
      <InfoMask show={showMask} onClose={hideMask} haveError={haveError} />
    </>
  )
}
