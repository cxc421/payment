import React from "react"
import styled from "styled-components"
import "../global.css"
import { Header } from "../components/Header"
import { Container } from "../components/Container"
import { ProductCard } from "../components/ProductCard"
import { CheckoutCard } from "../components/CheckoutCard"

const Content = styled.div`
  position: relative;
  margin-top: 21px;
  /* height: calc(100% - 160px); */
`

const ContentContainer = styled(Container)`
  position: relative;
  /* height: 100%; */
`

export default () => (
  <>
    <Header></Header>
    <Content>
      <ContentContainer>
        <ProductCard />
        <CheckoutCard />
      </ContentContainer>
    </Content>
  </>
)
