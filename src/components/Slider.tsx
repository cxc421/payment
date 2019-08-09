import React from "react"
import styled from "styled-components"
import cardSrc_1 from "../assets/credit_card_blue.svg"
import cardSrc_2 from "../assets/credit_card_yellow.svg"
import cardSrc_3 from "../assets/credit_card_red.svg"
import { SliderCard } from "./SliderCard"

const cardData = [
  {
    src: cardSrc_1,
    id: "c1",
  },
  {
    src: cardSrc_2,
    id: "c2",
  },
  {
    src: cardSrc_3,
    id: "c3",
  },
]

const Wrapper = styled.div`
  margin-top: 79px;
  width: 100%;
  /* background: lightgray; */
  position: relative;
`

const CardArea = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
`

const PontArea = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
`

type PointProp = { filled?: boolean }

const Point = styled.div<PointProp>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  border: 1px solid rgba(22, 47, 232, 1);
  margin: 0 12px;
  background: ${props =>
    props.filled ? "rgba(22, 47, 232, 1)" : "transparent"};
`

interface SliderState {
  firstCardPosX: number
}

const cardWidth = 248
const cardGap = 18

export class Slider extends React.Component<{}, SliderState> {
  state: SliderState = {
    firstCardPosX: -cardWidth - cardGap,
  }

  render() {
    const { firstCardPosX } = this.state

    return (
      <Wrapper>
        <CardArea>
          {cardData.map(({ src, id }, index) => (
            <SliderCard
              src={src}
              key={id}
              width={cardWidth}
              offset={firstCardPosX + (cardWidth + cardGap) * index}
            />
          ))}
        </CardArea>
        <PontArea>
          <Point />
          <Point filled={true} />
          <Point />
        </PontArea>
      </Wrapper>
    )
  }
}
