import React from "react";
import "./resume.css";
import Card from "./Card";
import { data } from "autoprefixer";

const Data = [
	{
		id: 1,
		category: "education",
		icon: "icon-graduation",
		year: "2022 - present",
		title: "Bachelor of Science in Information Technology",
		desc: "Southville International Schools and Colleges",
	},
	{
		id: 2,
		category: "education",
		icon: "icon-graduation",
		year: "2019 - 2021",
		title: "Senior High School",
		desc: "Las Piñas City National Science High School",
	},
	{
		id: 3,
		category: "education",
		icon: "icon-graduation",
		year: "2015 - 2021",
		title: "Junior High School",
		desc: "Las Piñas City National Science High School",
	}
];

const Resume = () => {
	return (
		<section className="resume container section" id="education">
			<h2 className="section__title headline-2 mb-4">Education</h2>
			<div className="resume__container grid ">
				<div className="timeline grid">
					{Data.map((val, id) => {
						if (val.category == "education") {
							return (
								<Card
									key={id}
									icon={val.icon}
									title={val.title}
									year={val.year}
									desc={val.desc}
								/>
							);
						}
					})}
				</div>

				<div className="grid">
					{Data.map((val, index) => {
						if (val.category == "experience") {
              return (
								<Card
									key={index}
									icon={val.icon}
									title={val.title}
									year={val.year}
									desc={val.desc}
								/>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
};

export default Resume;
