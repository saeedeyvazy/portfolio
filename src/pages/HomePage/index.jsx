import React from 'react'
import styled from 'styled-components'
import { IMAGE } from '../../constants'

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
`

const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
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
                </BackFilter>
            </TopSectionContainer>   
        </>
    )
}

export default HomePage
