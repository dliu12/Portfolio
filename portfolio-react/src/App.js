import React from 'react'
import { Outlet } from 'react-router-dom'
import './assets/styles/App.css'
import { ProjectNav } from './components'
import { HOME } from './general_util'

function App() {
	const [pageType, setPageType] = React.useState(HOME)
	return (
		<div className='App'>
			<ProjectNav pageType={pageType} />
			<Outlet context={[pageType, setPageType]} />
		</div>
	)
}

export default App
