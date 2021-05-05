import React from "react"
import styled from "styled-components"
import { color } from "../../constants/color"
import { deviceSize } from "../../constants/device.size"

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 2.5rem;
    font-weight: 600;
  }
`
const Func = styled.span`
  color: ${color.PRIMARY_COLOR};
`
const Saeed = styled.span`
  color: black;
`

function SectionTitle({ func }) {
  return (
    <div>
      <Title>
        <Saeed>saeed</Saeed>
        <Func>{`.${func}()`}</Func>
      </Title>
    </div>
  )
}

export default SectionTitle
