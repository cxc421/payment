import React from "react"
import styled from "styled-components"
import downIconSrc from "../assets/icon_down.svg"

const Wrapper = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(22, 47, 232, 1);
  padding: 8px 20px;
  display: inline-flex;
  color: rgba(22, 47, 232, 1);
  cursor: pointer;
`

const Text = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-right: 25px;
`

export const SelectBox = () => (
  <Wrapper>
    <Text>Pay by Credit Card</Text>
    <img src={downIconSrc} alt="down icon" />
  </Wrapper>
)
