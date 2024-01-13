import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/Shared/HorizontalNav.css";
import { Pin } from "../Decors";

const HorizontalNav = ({ linkList }) => {
	const location = useLocation();
	return (
		<nav className='HorizontalNav'>
			<ul>
				{(linkList || []).map((link, linkInd) => (
					<li key={`projectlink-${linkInd}`} className={location.pathname === link.path ? "--current" : ""}>
						<Link to={link.path}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default HorizontalNav;
