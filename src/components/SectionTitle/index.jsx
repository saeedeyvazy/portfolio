import React from "react"
import styled from "styled-components"
import { color } from "../../constants/color"

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
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
