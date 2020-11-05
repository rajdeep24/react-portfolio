import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
	// We'll go into the Hooks API later, for now, we are just using some code
	// from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
	// This allows the component to check the route any time the user uses a link to navigate.
	const location = useLocation();

	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link
					to="/home"
					className={
						location.pathname === "/home" ? "nav-link active" : "nav-link"
					}
				>
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/contact"
					className={
						location.pathname === "/contact" ? "nav-link active" : "nav-link"
					}
				>
					Contact
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/portfolio"
					className={
						location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
					}
				>
					Portfolio
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/blog"
					className={
						location.pathname === "/blog" ? "nav-link active" : "nav-link"
					}
				>
					Blog
				</Link>
			</li>
		</ul>
	);
}

export default NavTabs;
