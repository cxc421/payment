import React from "react"
import styled from "styled-components"
import { mobileSize } from "../constants/device"

export const Container = React.memo(styled.div`
  max-width: 1120px;
  margin: 0 auto;
  /* background: rgba(255, 255, 255, 0.2); */
  /* padding: 0 80px; */

  @media screen and (max-width: ${mobileSize}) {
    max-width: 100%;
    padding: 0 20px;
  }
`)
