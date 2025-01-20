const aboutItems = [
	{
		label: "Project done",
		number: 45,
	},
	{
		label: "Years of experience",
		number: 10,
	},
];

const About = () => {
	return (
		<section id="about" className="section">
			
			<div className="container">
			<h2 className="headline-2 mb-10">About</h2>
				<div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
					<p className="text-zinc-300 mb-4 md:mb-8 md:text-xl mdLmax-w-[60ch]">
						Welcome! I&apos;m lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
						ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum 
					</p>

					{/*<div className="flex flex-wrap items-center gap-4 md:gap-7">
						{aboutItems.map(({ label, number }, key) => (
							<div key={key}>
								<div className="flex place-items-center md:mb-2">
									<span className="text-2xl font-semibold md:text-4xl">
										{number}
									</span>
									<span className="text-sky-400 font-semibold md:text-3xl">
										+
									</span>
								</div>

								<p className="text-sm text-zinc-400">{label}</p>
							</div>
						))}
						<img
							src="/images/logo.svg}"
							alt="Logo"
							width={30}
							height={30}
							className="ml-auto md:w-[40px] md: h-[40]"
						/>
					</div> */}
					
				</div>
			</div>
		</section>
	);
};

export default About;
