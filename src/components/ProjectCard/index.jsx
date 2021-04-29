import React from "react"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 300px;
  margin: 6px 20px;
  cursor: pointer;
  background-image: url(${({ src }) => src});
  background-size: cover;
`

const BackFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: #cacaca;
  transition: all 300ms ease-in-out;
  z-index: 1;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 300ms ease-in-out;
`

function ProjectCard({ src }) {
  const [toggle, setToggle] = useState(false)
  return (
    <Container src={src}>
      <BackFilter visible={toggle} />{" "}
    </Container>
  )
}

export default ProjectCard
