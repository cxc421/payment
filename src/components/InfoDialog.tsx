import React from "react"
import styled from "styled-components"
import errorImgSrc from "../assets/error.png"
import successImgSrc from "../assets/succes.png"
import errorCloseBtn from "../assets/icon_Error.svg"
import successCloseBtn from "../assets/icon_Complete.svg"

type HaveError = { haveError: boolean }

const Wrapper = styled.div`
  width: 414px;
  height: 280px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, calc(100% + 220px));
  transition: transform 0.3s;
`

const Img = styled.img<HaveError>`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: ${props =>
    props.haveError
      ? "translate(-50%, calc(-100% + 53px))"
      : "translate(-50%, calc(-100% + 38px))"};
  z-index: 9;
`

const Dialog = styled.div<HaveError>`
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
  background: white;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${prop =>
    prop.haveError ? "rgba(208, 53, 33, 1)" : "rgba(22, 47, 232, 1)"};
  padding: 0 30px;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 42px;
`

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 25px;
`

const CloseImg = styled.img`
  margin-top: 22px;
  cursor: pointer;
`

interface InfoDialogProps {
  show: boolean
  onClose: () => void
  haveError: boolean
}

export const InfoDialog: React.FC<InfoDialogProps> = ({
  show,
  onClose,
  haveError,
}) => {
  const wrapperStyle: React.CSSProperties = show
    ? {
        transitionDelay: "0.15s",
        transform: `translate(-50%, 0px)`,
      }
    : {
        transitionDelay: "0s",
        transform: `translate(-50%, calc(100% + 220px))`,
      }

  return (
    <Wrapper style={wrapperStyle}>
      <Dialog haveError={haveError}>
        <Title>{haveError ? "Uh oh…" : "Yeey !"}</Title>
        {haveError ? (
          <Paragraph>
            Something went wrong… <br />
            We suggest you check all detail and try again.
          </Paragraph>
        ) : (
          <Paragraph
            style={{ height: 75, display: "flex", alignItems: "center" }}
          >
            Your payment has success !
          </Paragraph>
        )}
        <CloseImg
          src={haveError ? errorCloseBtn : successCloseBtn}
          alt="close dialog btn"
          onClick={onClose}
        />
      </Dialog>
      <Img
        style={{ display: `${haveError ? "block" : "none"}` }}
        haveError={true}
        src={errorImgSrc}
        alt="Dialog Image"
      />
      <Img
        style={{ display: `${haveError ? "none" : "block"}` }}
        haveError={false}
        src={successImgSrc}
        alt="Dialog Image"
      />
    </Wrapper>
  )
}
