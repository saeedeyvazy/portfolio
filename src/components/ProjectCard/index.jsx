import React from "react"
import { useState } from "react"
import styled from "styled-components"
import { deviceSize } from "../../constants/device.size"

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: url(${({ src }) => src});
  transition: all 0.2s ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
`

const BackFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  transition: all 300ms ease-in-out;
  z-index: 1;
  opacity: 0;
  opacity: ${({ visible }) => (visible ? 0.8 : 0)};
`
const Test = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 6px 20px;
  border-radius: 50%;
  &:hover .test {
    transform: scale(1.1);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: start;
  strong {
    font-size: 3rem;
    font-weight: 700;
  }
  span {
    font-size: 1rem;
    color: #504e4e;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    text-align: center;
    strong {
      font-size: 2rem;
      font-weight: 400;
    }
    span {
      font-size: 0.5rem;
    }
  }
`

function ProjectCard({ src, title, year, company, description }) {
  const [toggle, setToggle] = useState(false)
  return (
    <Container>
      <Test>
        <ImageContainer
          className='test'
          src={src}
          onMouseOver={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
        >
          <BackFilter visible={toggle} />
        </ImageContainer>
      </Test>
      <ProjectDesc>
        <strong>{title}</strong>
        <span>{`//  ${year} - ${company}`}</span>
        <h4>{description}</h4>
      </ProjectDesc>
    </Container>
  )
}

export default ProjectCard
