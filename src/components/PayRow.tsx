import styled from "styled-components"
import React, { memo } from "react"
import checkIconSrc from "../assets/icon_Check.svg"
import unCheckedIconSrc from "../assets/icon_Check-1.svg"

type Checked = { checked: boolean }

const Wrapper = styled.div<Checked>`
  background: white;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  span {
    color: ${props =>
      props.checked ? "rgba(22, 47, 232, 1)" : "rgba(22, 47, 232, 0.3)"};
    font-size: 12px;
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;

  img {
    margin-right: 40px;
  }
`

const CheckboxHide = styled.input`
  display: none;
`

interface PayRowProps {
  checked: boolean
  payText: string
  priceText: string
  onChange: () => void
}

export const PayRow: React.FC<PayRowProps> = memo(
  ({ checked, payText, priceText, onChange }) => (
    <Wrapper checked={checked}>
      <Label>
        <img src={checked ? checkIconSrc : unCheckedIconSrc} alt="check icon" />
        <CheckboxHide type="checkbox" checked={checked} onChange={onChange} />
        <span>{payText}</span>
      </Label>
      <span>{priceText}</span>
    </Wrapper>
  )
)
