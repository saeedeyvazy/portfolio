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

function HomePage() {
    return (
        <>
           <TopSectionContainer>
                <BackFilter>

                </BackFilter>
            </TopSectionContainer>   
        </>
    )
}

export default HomePage
