import React, { memo } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  /* background: pink; */
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 247px;
  img {
    display: block;
    width: 100%;
    transform-origin: center center;
    transform: translateY(3px) scale(1.04);
  }
`

interface SliderCardProps {
  src: string
  width: number
  offset: number
}

export const SliderCard: React.FC<SliderCardProps> = memo(
  ({ src, width, offset: offsetX }) => {
    const maxOffsetY = 39
    let offsetY = 0
    if (Math.abs(offsetX) < width + 16) {
      offsetY = maxOffsetY - (maxOffsetY * Math.abs(offsetX)) / (width + 18)
    }
    console.log({ offsetX, offsetY })
    const wrapperStyle: React.CSSProperties = {
      width,
      transform: `translate(${offsetX - width / 2}px, ${-offsetY}px)`,
    }

    return (
      <Wrapper style={wrapperStyle}>
        <img src={src} alt="card" />
      </Wrapper>
    )
  }
)
