import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:fit-content;
    width:33.333%;
    svg{
        color:#06BC9B;
        font-size:4rem;
    }
    h3{
        margin-top: 0;
        margin-bottom: 5px;
        font-weight: 400;
        color: #333;
    }
`

function SkillCard({icon, title, description}) {
    return (
        <Container>
             <FontAwesomeIcon icon={icon} />   
             <h3>{title}</h3>
             <p>{description}</p>
        </Container>
    )
}

export default SkillCard
