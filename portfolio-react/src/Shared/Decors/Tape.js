import "../../assets/styles/Shared/Tape.css";

const Tape = ({ size, position, style }) => {
	//NOTE: this is a plain decoration use component, it contains nothing but it's styles
	return (
		<div className='Tape' style={{ ...size, ...position, ...style }}>
			{" "}
		</div>
	);
};
export default Tape;
