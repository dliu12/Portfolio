import React from "react";
import "../../assets/styles/Shared/PhotoCard.css";
import Tape from "./Tape";

const PhotoCard = ({ imgSrc, photoLabel }) => {
	return (
		<div className='PhotoCard'>
			<Tape size={{ width: "50px", height: "100px" }} position={{ top: "-70px", left: "calc(50% - 25px)" }} style={{ zIndex: 2, transform: "rotateZ(90deg)" }} />
			<div className='PhotoCard__img'>
				<div className='PhotoCard__img--cover'> </div>
				<img src={imgSrc} alt={`image for ${photoLabel}`} />
			</div>

			<p className='PhotoCard__label'>{photoLabel}</p>
		</div>
	);
};
export default PhotoCard;
