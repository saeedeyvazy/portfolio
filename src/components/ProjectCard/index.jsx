import React from "react"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
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
  width: 400px;
  height: 300px;
  overflow: hidden;
  margin: 6px 20px;
  &:hover .test {
    transform: scale(1.1);
  }
`

function ProjectCard({ src }) {
  const [toggle, setToggle] = useState(false)
  return (
    <Test>
      <Container
        className='test'
        src={src}
        onMouseOver={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        <BackFilter visible={toggle} />
      </Container>
    </Test>
  )
}

export default ProjectCard
