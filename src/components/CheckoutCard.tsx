import React from "react"
import styled from "styled-components"
import { SelectBox } from "./SelectBox"
import { Slider } from "./Slider"
import { PayRow } from "./PayRow"

const Wrapper = styled.div`
  border-radius: 30px 30px 0 0;
  background: rgba(244, 244, 244, 1);
  position: absolute;
  right: 0;
  top: 0;
  width: 747px;
  min-height: calc(100vh - 160px);
  overflow-x: hidden;
`

const TopRow = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`

const PayWayArea = styled.div`
  margin-top: 55px;
  > * {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const PayButtonArea = styled.div`
  margin-top: 40px;
  text-align: center;
`

const PayButton = styled.div`
  width: 100px;
  height: 80px;
  background: rgba(22, 47, 232, 1);
  border-radius: 16px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
type PayWay = {
  checked: boolean
  payText: string
  priceText: string
}

interface CheckoutCardState {
  payWays: PayWay[]
}

interface CheckoutCardProps {
  onSubmit: () => void
  onError: () => void
}

export class CheckoutCard extends React.PureComponent<
  CheckoutCardProps,
  CheckoutCardState
> {
  state: CheckoutCardState = {
    payWays: [
      {
        checked: false,
        payText: "Pay in a lump sum",
        priceText: "$15,960",
      },
      {
        checked: false,
        payText: "Pay in installments",
        priceText: "$2,660 x 6",
      },
    ],
  }

  onPayWayCheckBoxChange = (index: number) => {
    this.setState(({ payWays }) => ({
      payWays: payWays.map((payWay, payWayIndex) => {
        if (index === payWayIndex) {
          return {
            ...payWay,
            checked: !payWay.checked,
          }
        }
        return payWay
      }),
    }))
  }

  onClickPayButton = () => {
    let checkoutNum = 0
    this.state.payWays.forEach(payWay => {
      if (payWay.checked) checkoutNum++
    })

    if (checkoutNum === 1) {
      this.props.onSubmit()
    } else {
      this.props.onError()
    }
  }

  render() {
    return (
      <Wrapper>
        <TopRow>
          <SelectBox />
        </TopRow>
        <Slider />
        <PayWayArea>
          {this.state.payWays.map((payWay, index) => (
            <PayRow
              key={index}
              {...payWay}
              onChange={() => this.onPayWayCheckBoxChange(index)}
            />
          ))}
        </PayWayArea>
        <PayButtonArea>
          <PayButton onClick={this.onClickPayButton}>Pay</PayButton>
        </PayButtonArea>
      </Wrapper>
    )
  }
}
