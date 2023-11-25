import React from "react";
import { Link } from "react-router-dom";
import OtherProjectImg from "../../assets/img/Introduction/Oni_face2.png";
import WebProjectImg from "../../assets/img/Introduction/eggEarth1.png";
import "../../assets/styles/pages/Introduction.css";
import { Tape, PhotoCard, Pin } from "../../Shared/Decors";

const Introduction = () => {
	return (
		<div className='Page__introduction'>
			{/* <section className='Page__introduction--text'>
				<Tape size={{ width: "150px", height: "45px" }} position={{ top: "-25px", left: "calc(50% - 100px)" }} />
				<h1>Hi! I am Diyi :)</h1>
				<p>I am a Front-End developer who is always traveling on the path of adopting new and exciting alien web technologies.</p>
			</section> */}
			<h1 className='Page__introduction--text'>
				<Pin size={"15px"} position={{ top: "8px", left: "10px" }} />
				Hi! I am Diyi :)
				<Pin size={"15px"} position={{ bottom: "8px", right: "10px" }} />
			</h1>
			<section className='Page__introduction--projects'>
				<PhotoCard imgSrc={WebProjectImg} photoLabel={"Web Projects"} />
				<PhotoCard imgSrc={OtherProjectImg} photoLabel={"Other Projects"} />
			</section>
		</div>
	);
};

export default Introduction;
