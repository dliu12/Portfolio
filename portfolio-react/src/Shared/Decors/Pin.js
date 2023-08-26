import '../../assets/styles/Shared/Pin.css'

const Pin = ({ size, position }) => {
	//NOTE: this is a plain decoration use component, it contains nothing but it's styles
	return (
		<div className='pin' style={{ width: size, height: size, ...position }}>
			{' '}
		</div>
	)
}

export default Pin
