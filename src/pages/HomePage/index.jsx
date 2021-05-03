import React from "react"
import styled from "styled-components"
import { IMAGE, COLOR } from "../../constants"
import { Marginer } from "../../components/Marginer"
import ReactTypingEffect from "react-typing-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBootstrap,
  faCss3,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJava,
  faJs,
  faLinkedin,
  faNpm,
  faReact,
  faSlackHash,
  faTrello,
  faTwitter,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons"
import SkillCard from "../../components/SkillCard"
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Aos from "aos"
import DescriptionSection from "../../components/DescriptionSection"
import { deviceSize } from "../../constants/device.size"
import Project from "./Project"
import SectionTitle from "../../components/SectionTitle"
import { color } from "../../constants/color"

const TopSectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${IMAGE.BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const BackFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(16 12 12 / 36%);
  display: flex;
  flex-direction: column;
  align-items: space-around;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    display: none;
  }
`
const Logo = styled.div`
  flex: 1;
  height: 100px;
`
const Menu = styled.div`
  display: flex;
  flex: 10;
  justify-content: flex-end;

  padding: 0 20px;
  h4 {
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-left: 15px;
    transition: all 300ms ease-in-out;
    &:hover {
      cursor: pointer;
      color: ${color.PRIMARY_COLOR};
    }
  }
`

const SummarizaInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  text-align: start;
  h1 {
    color: #fff;
    font-size: 64px;
    text-transform: uppercase;
  }
`

const SummSkillsContainer = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
`

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 15px 35px;
  cursor: pointer;
  border-radius: 3px;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  text-transform: uppercase;
  width: 150px;
  text-align: center;
  &:hover {
    background-color: ${COLOR.PRIMARY_COLOR};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const IntroducePerson = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  padding: 10px 20px;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: auto;
  }
`

const ProfilePhoto = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: auto;
  }
  img {
    object-fit: contain;
    width: 270px;
    height: 270px;
    border-radius: 50%;
  }
  a {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: fit-content;
  svg {
    color: #795548;
    font-size: 2rem;
    padding: 0 10px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const ProfileDesc = styled.div`
  flex: 2;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: align-start;
  height: 100%;
  color: #252525;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    text-align: center;
    justify-content: center;
    height: auto;
  }
  > h1 {
    font-weight: 700;
    font-size: 26px;
  }
  > p {
    font-size: 14px;
    font-weight: normal;
    line-height: 27px;
    color: #666;
    margin-bottom: 15px;
  }
  h6 {
    margin-top: 0;
    font-size: 16px;
    color: #444444;
    font-weight: 600;
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    margin-left: 10px;
    cursor: pointer;
    color: #818181;
    transition: all 200ms ease-in-out;
    &:hover {
      color: #1c1c1c;
    }
  }
`

function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <Container>
      <TopSectionContainer>
        <BackFilter>
          <HeaderContainer>
            <Logo />
            <Menu>
              <h4>.is()</h4>
              <h4>.skills()</h4>
              <h4>.tools()</h4>
              <h4>.work()</h4>
              <h4>.contract()</h4>
            </Menu>
          </HeaderContainer>
          <SummarizaInfo>
            <Marginer direction='horizontal' margin={20} />
            <div style={{ textAlign: "center", color: "white" }}>
              <h3 style={{ margin: 0 }}>MY NAME IS</h3>
              <h1
                style={{
                  borderBottom: "1px solid white",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Saeed Eyvazy
              </h1>
            </div>
            <Marginer margin={10} direction='vertical' />
            <SummSkillsContainer>
              <ReactTypingEffect
                typingDelay={300}
                eraseSpeed={20}
                eraseDelay={700}
                speed={100}
                text={[
                  "React Js Developer",
                  "Spring Boot Developer",
                  "Software Engineer",
                  "Coder",
                  "Bug Squasher",
                ]}
              />
            </SummSkillsContainer>
            <Marginer direction='vertical' margin={50} />
            <Button>Resume</Button>
          </SummarizaInfo>
        </BackFilter>
      </TopSectionContainer>
      <Marginer direction='vertical' margin={20} />
      <IntroducePerson>
        <ProfilePhoto>
          <img alt='profile' src={IMAGE.PROFILE} />
          <h3>
            <a href='https://utdallas.edu' rel='noopener'>
              <span>The Kharazmi University Of Tehran, Iran</span>
            </a>
          </h3>
          <SocialMediaContainer>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </SocialMediaContainer>
        </ProfilePhoto>
        <ProfileDesc>
          <SectionTitle func='is' />
          <h1>
            A Full Stack Developer
            <br />
            From Tehran, Iran.
          </h1>

          <p>
            After graduating with a bachelor’s in biology, I found myself in a
            stable career as a microbiologist for a major brewery. While the
            idea of working at a brewery was definitely a great conversation
            starter, I realized that although I still had a love for science,
            the industry I was in was lacking in creativity and problem solving.
            After dabbling with some introductory JavaScript courses on the
            internet and exploring programming through self-teaching, I decided
            to take a leap of faith and made a switch in careers into tech.
          </p>
          <p>
            Through LearningFuze, I have developed a strong understanding of
            JavaScript (ES5 & ES6), React, Node.js, Express, PostgreSQL, HTML5,
            and CSS3. As a developer, I find a lot of joy and excitement
            utilizing my skills to help troubleshoot bugs and pushing projects
            forward. I enjoy learning new technologies and growing in a field
            that is constantly being pushed to new boundaries.
          </p>
          <p>
            Feel free to connect with me! Let's talk about web dev, tech,
            sports, photography, video games, cooking, or how I can be of help
            to your team or business! I'd love to get to know more developers
            and expand my network. I also know a thing or two about beer.
          </p>
          <h6>Let’s build something cool.</h6>
          <h6>
            <span
              style={{
                color: "rgb(26, 98, 202)",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              Mail:
              <a href='mailto:saeed.eyvazy@gmail.com'>saeed.eyvazy@gmail.com</a>
            </span>
          </h6>

          <Button>Resume</Button>
        </ProfileDesc>
      </IntroducePerson>
      <DescriptionSection
        title='skills'
        subtitle='Languages and Technologies that I have learned and applied to my
                    projects'
      >
        <SkillCard
          title='Java'
          icon={faJava}
          description='Spring (Boot & MVC), JUnit, Maven'
        />
        <SkillCard
          title='React'
          icon={faReact}
          description='ReactJs & React Native'
        />
        <SkillCard
          title='Databases'
          icon={faDatabase}
          description='Oracle, MongoDB'
        />
        <SkillCard
          title='Javascript'
          icon={faJs}
          description='JavaScript (ES6/ES7)'
        />
        <SkillCard title='CSS3' icon={faCss3} description='' />
        <SkillCard title='HTML5' icon={faHtml5} description='' />
        <SkillCard title='Bootstrap4' icon={faBootstrap} description='' />
      </DescriptionSection>
      <DescriptionSection
        title='tools'
        bgColor='white'
        subtitle='My weapons of choice to help tackle any project.'
      >
        <SkillCard title='Git' icon={faGitAlt} />
        <SkillCard title='GitHub' icon={faGithub} />
        <SkillCard title='npm' icon={faNpm} />
        <SkillCard title='Trello' icon={faTrello} />
        <SkillCard title='Slack' icon={faSlackHash} />
        <SkillCard title='Docker' icon={faDocker} />
        <SkillCard title='Terminal' icon={faTerminal} />
        <SkillCard title='Ubuntu' icon={faUbuntu} />
      </DescriptionSection>
      <Project />
    </Container>
  )
}

export default HomePage
