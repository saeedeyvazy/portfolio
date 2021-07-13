import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { color } from '../../constants/color'
import { deviceSize } from '../../constants/device.size'
import Button from '../Button'

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
	background-color: #3c444b;
	transition: all 700ms ease-in-out;
	opacity: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	opacity: ${({ visible }) => (visible ? 1 : 0)};
`
const Test = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
`

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 400px;
	border-radius: 10px;
	border: 1px solid transparent;
	overflow: hidden;
	height: 250px;
	margin: 6px 20px;
	background-color: #cacaca;
	@media screen and (max-width: ${deviceSize.mobile}px) {
		flex-direction: column;
		align-items: center;
		margin: 6px;
	}
	@media screen and (max-width: ${deviceSize.small}px) {
		width: 90%;
	}
`

const ProjectDesc = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${color.PRIMARY_COLOR};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	strong {
		font-size: 1.5rem;
		font-weight: 700;
	}
	span {
		font-size: 0.75rem;
		color: #504e4e;
	}
	h4 {
		font-size: 0.75rem;
		background: rgba(82, 93, 104, 0.7);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media screen and (max-width: ${deviceSize.mobile}px) {
		text-align: center;
		strong {
			font-size: 1.5rem;
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
					<BackFilter visible={toggle}>
						<ProjectDesc>
							<strong>{title}</strong>
							<h4>{description}</h4>
						</ProjectDesc>
						<Button bg='#06bc9b'>View Project</Button>
					</BackFilter>
				</ImageContainer>
			</Test>
		</Container>
	)
}

export default ProjectCard
