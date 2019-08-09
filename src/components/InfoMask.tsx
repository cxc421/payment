import React, { memo } from "react"
import styled from "styled-components"
import { InfoDialog } from "./InfoDialog"

type HaveError = { haveError: boolean }

const Mask = styled.div<HaveError>`
  position: fixed;
  overflow: hidden;
  bottom: 0;
  height: calc(100vh - 160px);
  left: 0;
  width: 100%;
  background: ${props =>
    props.haveError ? "rgba(0, 0, 0, 0.7)" : "rgba(22, 47, 232, 0.7)"};
  transition: all 0.3s;
`

interface InfoMaskProps extends HaveError {
  show: boolean
  onClose: () => void
}

export const InfoMask: React.FC<InfoMaskProps> = memo(
  ({ show, onClose, haveError }) => {
    const maskStyle: React.CSSProperties = show
      ? {
          opacity: 1,
          visibility: "visible",
        }
      : {
          opacity: 0,
          visibility: "hidden",
        }

    return (
      <Mask style={maskStyle} haveError={haveError}>
        <InfoDialog
          show={show}
          onClose={onClose}
          haveError={haveError}
        ></InfoDialog>
      </Mask>
    )
  }
)
