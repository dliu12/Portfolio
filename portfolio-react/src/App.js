import React from 'react'
import { Outlet } from 'react-router-dom'
import './assets/styles/App.css'
import { SocialMedia } from './Shared'
import { ProjectNav } from './components'
import { HOME } from './general_util'

function App() {
	const [pageType, setPageType] = React.useState(HOME)
	return (
		<div className='App'>
			<ProjectNav pageType={pageType} />
			<Outlet />
		</div>
	)
}

export default App
