import React, { useState } from "react"
import styled from "styled-components"
import "../global.css"
import { Header } from "../components/Header"
import { Container } from "../components/Container"
import { ProductCard } from "../components/ProductCard"
import { CheckoutCard } from "../components/CheckoutCard"
import { InfoMask } from "../components/InfoMask"

const Content = styled.div`
  position: relative;
  margin-top: 21px;
  /* height: calc(100% - 160px); */
`

const ContentContainer = styled(Container)`
  position: relative;
  /* height: 100%; */
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
        <ContentContainer>
          <ProductCard />
          <CheckoutCard onSubmit={onSubmit} onError={onError} />
        </ContentContainer>
      </Content>
      <InfoMask show={showMask} onClose={hideMask} haveError={haveError} />
    </>
  )
}
