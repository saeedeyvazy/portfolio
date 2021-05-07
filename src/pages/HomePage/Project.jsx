import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../../components/ProjectCard'
import SectionTitle from '../../components/SectionTitle'
import { IMAGE } from '../../constants'
import { deviceSize } from '../../constants/device.size'

const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	background-color: ${({ bgColor }) => (bgColor ? bgColor : '#f5f6f7')};
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

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: space-around;
	flex-wrap: wrap;
`

const ProjectContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
`

function Project() {
	return (
		<Container>
			<SectionTitle func='work' />
			<ProjectContainer>
				<CardContainer data-aos='fade-in'>
					<ProjectCard
						src={IMAGE.PROJECTS.disney}
						title='Disney Plus'
						year='2021'
						description='Online Movies'
						company='Own'
					/>
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
						src={IMAGE.PROJECTS.trend}
						title='World Trends'
						year='2021'
						description='Showing Twitter Trending Topics & Tweets'
						company='Own'
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
