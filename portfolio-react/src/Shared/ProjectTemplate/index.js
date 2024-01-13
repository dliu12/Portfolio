import React from "react";
import { Outlet } from "react-router-dom";
import HorizontalNav from "../HorizontalNav";
import "../../assets/styles/Shared/ProjectTemplate.css";
import { Pin } from "../Decors";

const ProjectTemplate = ({ title, navigation }) => {
	return (
		<section className='ProjectTemplate'>
			<div className='ProjectTemplate__header'>
				<h1>
					<Pin size={"15px"} position={{ top: "8px", left: "10px" }} />
					<span>{title}</span>
					<Pin size={"15px"} position={{ bottom: "8px", right: "10px" }} />
				</h1>
				<HorizontalNav linkList={navigation} />
			</div>
			<Outlet />
		</section>
	);
};
export default ProjectTemplate;
