import React from "react"
import styled from "styled-components"
import cardSrc_1 from "../assets/credit_card_blue.svg"
import cardSrc_2 from "../assets/credit_card_yellow.svg"
import cardSrc_3 from "../assets/credit_card_red.svg"
import { SliderCard } from "./SliderCard"
import { mobileSize } from "../constants/device"

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
  @media (max-width: ${mobileSize}) {
    margin-top: 59px;
  }
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
  @media (max-width: ${mobileSize}) {
    margin-top: 20px;
  }
`

type PointProp = { filled?: boolean }

const Point = styled.div<PointProp>`
  /* width: 8px;
  height: 8px;
  border-radius: 4px;
  border: 1px solid rgba(22, 47, 232, 1);
  margin: 0 12px;
  cursor: pointer;
  background: ${props =>
    props.filled ? "rgba(22, 47, 232, 1)" : "transparent"}; */

  width: 20px;
  height: 20px;
  border-radius: 9px;
  margin: 0 2px;
  /* background: pink; */
  margin-bottom: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 4px;
    border: 1px solid rgba(22, 47, 232, 1);
    background: ${props =>
      props.filled ? "rgba(22, 47, 232, 1)" : "transparent"};
  }
`

enum SliderStatus {
  Dragging,
  Animating,
  Idle,
}

interface SliderState {
  firstCardPosX: number
  status: SliderStatus
}

const easeOut = progress => Math.pow(--progress, 5) + 1
const easeOutSin = function(t) {
  return Math.sin((Math.PI / 2) * t)
}

const cardWidth = 248
const cardGap = 16

export class Slider extends React.Component<{}, SliderState> {
  private cardsPosList: number[]
  private prevMousePos: number
  private firsCardPosMin: number
  private firstCardPosMax: number
  private animateTargetPos: number
  private animateStartPos: number
  private animateDuration: number
  private animateStartTime: number
  private animateKey: number

  constructor(props) {
    super(props)

    this.cardsPosList = cardData.map((_, index) =>
      this.getFirstCardPosByIndex(index)
    )
    this.prevMousePos = 0
    this.firsCardPosMin = this.cardsPosList[this.cardsPosList.length - 1]
    this.firstCardPosMax = this.cardsPosList[0]
    this.state = {
      firstCardPosX: this.cardsPosList[1],
      status: SliderStatus.Idle,
    }
  }

  getFirstCardPosByIndex = (index: number): number => {
    return -(cardWidth + cardGap) * index
  }

  getCloestCardIndex = (cardPos: number): number => {
    let minDiff = Number.MAX_SAFE_INTEGER
    let closesIndex = -1
    for (let i = this.cardsPosList.length - 1; i >= 0; i--) {
      const diff = Math.abs(this.cardsPosList[i] - cardPos)
      if (diff > minDiff) break
      minDiff = diff
      closesIndex = i
    }
    return closesIndex
  }

  updateAnimate = (now: number) => {
    const elapsed = now - this.animateStartTime
    const progress = easeOutSin(Math.min(elapsed / this.animateDuration, 1))
    const position =
      progress * (this.animateTargetPos - this.animateStartPos) +
      this.animateStartPos
    this.setState({
      firstCardPosX: position,
      status:
        position !== this.animateTargetPos
          ? SliderStatus.Animating
          : SliderStatus.Idle,
    })
  }

  onPointMouseDown = (index: number) => {
    const { status, firstCardPosX } = this.state
    if (status === SliderStatus.Dragging) return

    const targetPos = this.cardsPosList[index]
    if (targetPos === firstCardPosX) return

    cancelAnimationFrame(this.animateKey)
    this.animateDuration = 300
    this.animateStartPos = firstCardPosX
    this.animateTargetPos = targetPos
    this.animateStartTime = performance.now()
    this.setState({ status: SliderStatus.Animating })
  }

  handleCardDownEvent = (pageX: number) => {
    const { status } = this.state
    if (status !== SliderStatus.Idle) return

    this.setState({ status: SliderStatus.Dragging })
    this.prevMousePos = pageX
  }

  handleDocumentMoveEvent = (pageX: number) => {
    const { status } = this.state
    if (status !== SliderStatus.Dragging) return

    const newMousePos = pageX
    const diff = newMousePos - this.prevMousePos

    this.setState(prevState => {
      let newCardPos = prevState.firstCardPosX + diff
      if (newCardPos < this.firsCardPosMin) {
        newCardPos = this.firsCardPosMin
      } else if (newCardPos > this.firstCardPosMax) {
        newCardPos = this.firstCardPosMax
      }
      return { firstCardPosX: newCardPos }
    })
    this.prevMousePos = newMousePos
  }

  handleDoucmentUpEvent = () => {
    const { status, firstCardPosX } = this.state
    if (status !== SliderStatus.Dragging) return

    const cloestCardIndex = this.getCloestCardIndex(firstCardPosX)
    const targetPos = this.cardsPosList[cloestCardIndex]
    if (targetPos === firstCardPosX) {
      this.setState({ status: SliderStatus.Idle })
      return
    }

    this.animateStartPos = firstCardPosX
    this.animateTargetPos = targetPos
    this.animateStartTime = performance.now()
    this.animateDuration = 200
    this.setState({ status: SliderStatus.Animating })
  }

  onCardTouchStart = (e: React.TouchEvent) => {
    this.handleCardDownEvent(e.touches[0].pageX)
  }

  onCardMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    this.handleCardDownEvent(e.pageX)
  }

  onDocumentTouchMove = (e: TouchEvent) => {
    this.handleDocumentMoveEvent(e.touches[0].pageX)
  }

  onDocumentMouseMove = (e: MouseEvent) => {
    this.handleDocumentMoveEvent(e.pageX)
  }

  onDocumentTouchEnd = (e: TouchEvent) => {
    this.handleDoucmentUpEvent()
  }

  onDocumentMouseUp = (e: MouseEvent) => {
    this.handleDoucmentUpEvent()
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.onDocumentMouseMove)
    document.addEventListener("mouseup", this.onDocumentMouseUp)
    document.addEventListener("touchmove", this.onDocumentTouchMove)
    document.addEventListener("touchend", this.onDocumentTouchEnd)
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onDocumentMouseMove)
    document.removeEventListener("mouseup", this.onDocumentMouseUp)
    document.removeEventListener("touchmove", this.onDocumentTouchMove)
    document.removeEventListener("touchend", this.onDocumentTouchEnd)
    cancelAnimationFrame(this.animateKey)
  }

  componentDidUpdate() {
    if (this.state.status === SliderStatus.Animating) {
      this.animateKey = requestAnimationFrame(this.updateAnimate)
    }
  }

  render() {
    const { firstCardPosX, status } = this.state
    const cardStyle: React.CSSProperties = {
      cursor: status === SliderStatus.Dragging ? "grabbing" : "grab",
    }
    const cloestCardIndex = this.getCloestCardIndex(firstCardPosX)

    return (
      <Wrapper>
        <CardArea>
          {cardData.map(({ src, id }, index) => (
            <SliderCard
              src={src}
              key={id}
              width={cardWidth}
              offset={firstCardPosX + (cardWidth + cardGap) * index}
              style={cardStyle}
              onMouseDown={this.onCardMouseDown}
              onTouchStart={this.onCardTouchStart}
            />
          ))}
        </CardArea>
        <PontArea>
          {/* <Point />
          <Point filled={true} />
          <Point /> */}
          {cardData.map((_, index) => (
            <Point
              key={index}
              filled={index === cloestCardIndex}
              onMouseDown={() => this.onPointMouseDown(index)}
            />
          ))}
        </PontArea>
      </Wrapper>
    )
  }
}
