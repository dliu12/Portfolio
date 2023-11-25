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
			{ name: 'SMASH!', link: '/web/smash' },
			{ name: '3D SMASH!', link: '/web/3D_Smash' },
			{ name: 'Focus!', link: '/web/focus' },
			{ name: 'Mystery Communicator', link: '/web/3way_communicator' }
		],
		other: [{ name: 'Fusion 360 CAD', link: '/other/fusion360_CAD' }]
	}

	return (
		<nav>
			<ul className='ProjectNav'>
				{pageType === WEB ? (
					<ProjectDropDown projectList={projectList.web} />
				) : pageType === OTHER ? (
					<ProjectDropDown projectList={projectList.other} />
				) : (
					<Home />
				)}
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
					<Pin size={'15px'} position={{ top: '-5px', left: '100px' }} />
					<Link to={project.url}>{project.name}</Link>
				</li>
			))}
		</React.Fragment>
	)
}

ProjectDropDown.propTypes = {
	projectList: PropTypes.array.isRequired
}
