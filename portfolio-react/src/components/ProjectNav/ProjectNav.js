import React from 'react'
import PropTypes from 'prop-types'
import { HOME, WEB, OTHER } from '../../general_util'
import { Pin } from '../../Shared'
import { Link } from 'react-router-dom'

import '../../assets/styles/components/ProjectNav.css'
import { SocialMedia } from '../../Shared'

const ProjectNav = ({ pageType }) => {
	const projectList = {
		home: [],
		web: [
			{ name: 'SMASH!', link: '/smash' },
			{ name: '3D SMASH!', link: '/3D_Smash' },
			{ name: 'Focus!', link: '/focus' },
			{ name: 'Mystery Communicator', link: '/3way_communicator' }
		],
		other: [{ name: 'Fusion 360 CAD', link: '/fusion360_CAD' }]
	}

	return (
		<nav>
			<ul className='ProjectNav'>
				{pageType === WEB ? <p>Web</p> : pageType === OTHER ? <p>other</p> : <Home />}
			</ul>
			<SocialMedia />
		</nav>
	)
}

export default ProjectNav

const Home = () => {
	return (
		<ul className='BasicContacts'>
			<Pin size={'20px'} position={{ top: '-5px', left: '100px' }} />
			<b className='BasicContacts__header'>Contacts:</b>
			<li>diyi.liu997@gmail.com</li>
			<li>
				The Cooper Union, <span>Bachelor of Science in Engineering</span>
			</li>
		</ul>
	)
}

const ProjectDropDown = ({ projectList }) => {
	return (
		<React.Fragment>
			{projectList.map((project, ind) => (
				<li className='ProjectNav__items' key={`project-${ind}`}>
					<Link to={project.url}>{project.name}</Link>
				</li>
			))}
		</React.Fragment>
	)
}

ProjectDropDown.propTypes = {
	projectList: PropTypes.array.isRequired
}
