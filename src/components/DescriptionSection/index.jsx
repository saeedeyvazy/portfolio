import React from "react"
import styled from "styled-components"
import { deviceSize } from "../../constants/device.size"
import { Marginer } from "../Marginer"

const SkillsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#f5f6f7")};
  > h3 {
    flex: 1;
    font-size: 2.25rem;
    font-weight: 400;
    margin-bottom: 0;
  }
  > p {
    line-height: 10px;
    margin-top: 5px;
    font-size: 14px;
    font-weight: normal;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    > p {
      display: none;
    }
  }
`
const CardContainer = styled.div`
  flex: 6;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

function DescriptionSection({ title, subtitle, children, bgColor }) {
  return (
    <SkillsContainer bgColor={bgColor}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <Marginer direction='vertical' margin={50} />
      <CardContainer data-aos='fade-in'>{children}</CardContainer>
    </SkillsContainer>
  )
}

export default DescriptionSection
