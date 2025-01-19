import React from "react";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<aside className="aside">
			<a href="#home" className="nav_logo">
				<img
					src={import.meta.env.BASE_URL + "/images/logo.svg"}
					width={125}
					height={125}
					alt="Logo"
				/>
			</a>

			<nav className="nav">
				<div className="nav__menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link">
								<i className="icon-home"></i>
							</a>
						</li>

						<li className="nav__item">
							<a href="#about" className="nav__link">
								<i className="icon-user-following"></i>
							</a>
						</li>

                        <li className="nav__item">
							<a href="#resume" className="nav__link">
                            <i className="icon-graduation"></i>
							</a>
						</li>

						<li className="nav__item">
							<a href="#work" className="nav__link">
                            <i className="icon-briefcase"></i>
							</a>
						</li>

						<li className="nav__item">
							<a href="#contact" className="nav__link">
								<i className="icon-bubble"></i>
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
