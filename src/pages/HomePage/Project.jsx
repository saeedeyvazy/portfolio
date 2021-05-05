import React from "react"
import styled from "styled-components"
import DescriptionSection from "../../components/DescriptionSection"
import ProjectCard from "../../components/ProjectCard"
import SectionTitle from "../../components/SectionTitle"
import { IMAGE } from "../../constants"
import { deviceSize } from "../../constants/device.size"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
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
  /* width: fit-content; */
  flex: 0.1;
  flex-wrap: wrap;
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
const CardContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-around;
  flex-wrap: wrap;
`

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const ProjectTitle = styled.div`
  flex: 1;
  height: auto;
`

function Project() {
  return (
    <Container>
      <SectionTitle func='work' />
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
      <ProjectContainer>
        <ProjectTitle>
          <h1>work.all()</h1>
        </ProjectTitle>
        <CardContainer data-aos='fade-in'>
          <ProjectCard
            src={IMAGE.PROJECTS.servycing}
            title='Servycing'
            year='2018'
            description='Online Servycing For Homes'
            company='BizCommerce'
          />
          <ProjectCard
            src={IMAGE.PROJECTS.food}
            title='Chef Koochooloo'
            year='2021'
            description='Mobile App For Cooking & Learning English'
            company='Chef Koochooloo'
          />
          <ProjectCard
            src={IMAGE.PROJECTS.otp}
            title='OTP'
            year='2019'
            description='One Time Password Mobile App For Bank'
            company='Iraninan Ghavamin Bank'
          />
          <ProjectCard
            src={IMAGE.PROJECTS.pishkhan}
            title='Bank Assistant'
            year='2019'
            description='online Iranina Bank Assitant'
            company='Resalat Iranina Bank'
          />
        </CardContainer>
      </ProjectContainer>
    </Container>
  )
}

export default Project
