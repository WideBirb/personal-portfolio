import React from "react";
import "./resume.css";
import Card from "./Card";
import { data } from "autoprefixer";

const Data = [
	{
		id: 1,
		category: "education",
		icon: "icon-graduation",
		year: "2019 - present",
		title: "Academic Degree",
		desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
	},
	{
		id: 2,
		category: "education",
		icon: "icon-graduation",
		year: "2013 - 2017",
		title: "Bachelor's Degree",
		desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
	},
	{
		id: 3,
		category: "education",
		icon: "icon-graduation",
		year: "2009 - 2013",
		title: "Honours Degree",
		desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
	}
];

const Resume = () => {
	return (
		<section className="resume container section" id="education">
			<h2 className="section__title headline-2 mb-10">Education</h2>
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
