import React from "react";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<aside className="aside">
			<a href="#home" className="nav_logo">
				<span className="text-4xl">&#223;</span>
			</a>

			<nav className="nav">
				<div className="nav__menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#projects" className="nav__link">
                            <i className="icon-folder"></i>
							</a>
						</li>

						<li className="nav__item">
							<a href="#technologies" className="nav__link">
                            <i className="icon-layers"></i>
							</a>
						</li>

						<li className="nav__item">
							<a href="#contact" className="nav__link">
								<i className="icon-envelope-letter"></i>
							</a>
						</li>
					</ul>
				</div>
			</nav>

            <div className="nav__footer flex justify-center items-center rotate-180">
                <span className="copyright">&copy; 2024 - 2025. </span>
                <span className="copyright meName">Brid Guiruela</span>
            </div>
		</aside>
	);
};

export default Sidebar;
