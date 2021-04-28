import React from 'react'
import styled from 'styled-components'
import { IMAGE } from '../../constants'
import {Marginer} from '../../components/Marginer'
import ReactTypingEffect from 'react-typing-effect';

const TopSectionContainer = styled.div`
    height:100vh;
    width:100%;
    background-image:url(${IMAGE.BG});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
`

const BackFilter = styled.div`
    width:100%;
    height:100%;
    background-color:rgb(16, 12, 12,.8);
    display:flex;
    flex-direction:column;
    align-items:space-around;
`

const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:50px;
    
`
const Logo = styled.div`
    flex:1;
    height:100px;
`
const Menu = styled.div`
    display:flex;
    flex:1;
    justify-content:flex-end;

    padding:0 20px;
    h4{
        font-size:14px;
        font-weight:600;
        color:#fff;
        margin-left:35px;
        transition:all 200ms ease-in-out;
        &:hover{ 
            cursor: pointer;
            opacity:.8;
        }
    }
`

const SummarizaInfo = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:0 20px;
    align-items:flex-start;
    justify-content:center;
    text-align: start;
    h1{
        color:#fff;
        font-size: 64px;
        text-transform:uppercase;
    }
`

const SkillsContainer = styled.div`
    font-size:12px;
    color:#fff;
    font-weight:500;
    letter-spacing:3px;
`

const Button = styled.button`
    background-color:#000;
    color:#fff;
    border:none;
    padding:15px 35px;
    cursor: pointer;
    border-radius:3px;
    font-weight:500;
    transition:all 200ms ease-in-out;
    text-transform:uppercase;
    &:hover{
       background-color:#f90505;;     
    }
`

function HomePage() {
    return (
        <>
           <TopSectionContainer>
                <BackFilter>
                    <HeaderContainer>
                        <Logo />
                        <Menu>
                            <h4>Home</h4>
                            <h4>About</h4>
                            <h4>Projects</h4>
                            <h4>Skills</h4>
                            <h4>Tools</h4>
                            <h4>Contract</h4>
                        </Menu>
                    </HeaderContainer>
                    <SummarizaInfo>
                        <Marginer direction="horizontal" margin={20}/>
                        <h1>Saeed<br/>Eyvazy</h1>
                        <SkillsContainer>
                             <ReactTypingEffect 
                                typingDelay={300}    
                                eraseSpeed={20} 
                                eraseDelay={400} 
                                speed={50} 
                                text={["React Js Developer", "Spring Boot Developer", "Software Engineer", "Coder", "Bug Squasher"]} />
                        </SkillsContainer>
                        <Marginer direction="vertical" margin={20}/>
                        <Button>Resume</Button>
                    </SummarizaInfo>
                    
                </BackFilter>
            </TopSectionContainer>   
        </>
    )
}

export default HomePage
