import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import { deviceSize } from "../../constants/device.size"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 25%;
  svg {
    color: #06bc9b;
    font-size: 4rem;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 400;
    color: #333;
  }
  p {
    font-size: 14px;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 50%;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 12px;
    }
  }

  @media screen and (min-width: ${deviceSize.mobile}px) {
    h3 {
      font-size: 1.3rem;
    }
  }
`

function SkillCard({ icon, title, description }) {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}

export default SkillCard
