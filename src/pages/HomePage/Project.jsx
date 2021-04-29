import React from "react"
import styled from "styled-components"
import DescriptionSection from "../../components/DescriptionSection"
import { deviceSize } from "../../constants/device.size"

const ProjectContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#f5f6f7")};
  > h3 {
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

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  flex: 1;
`

const Tab = styled.div`
  cursor: pointer;
  margin: 0 30px;
  text-align: center;
  padding: 0 20px;
  height: fit-content;
  border-bottom: solid 0px #019fb6;
  transition: all 250ms ease-in-out;

  &:hover {
    border-bottom: solid 1px #019fb6;
    transform-origin: 0% 100%;
  }
  &:focus {
    border-bottom: solid 1px #019fb6;
    transform-origin: 0% 100%;
  }
`
const TabText = styled.h6`
  color: black;
  font-size: 13px;
  text-transform: uppercase;
`

function Project() {
  return (
    <ProjectContainer>
      <h3>Projects</h3>
      <p>
        From ideation to creation, here are some applications that I have
        developed
      </p>
      <TabContainer>
        <Tab>
          <TabText>All</TabText>
        </Tab>
        <Tab>
          <TabText>ReactJs</TabText>
        </Tab>
        <Tab>
          <TabText>React Native</TabText>
        </Tab>
        <Tab>
          <TabText>Rest Api</TabText>
        </Tab>
      </TabContainer>
    </ProjectContainer>
  )
}

export default Project
