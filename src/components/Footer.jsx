import { ButtonPrimary } from "./Button";
const sitemap = [
	{
		label: "Home",
		href: "#home",
	},
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Education",
		href: "#education",
	},
	{
		label: "Projects",
		href: "#projects",
	},

	{
		label: "Contact",
		href: "#contact",
	},
];

const socials = [
	{
		label: "GitHub",
		href: "https://pbs.twimg.com/media/Ggi-edFaAAAe_sK?format=jpg&name=large",
	},
	{
		label: "LinkedIn",
		href: "https://pbs.twimg.com/media/Ggi-edFaAAAe_sK?format=jpg&name=large",
	},
	{
		label: "Twitter X",
		href: "https://pbs.twimg.com/media/Ggi-edFaAAAe_sK?format=jpg&name=large",
	},
	{
		label: "Instagram",
		href: "https://pbs.twimg.com/media/Ggi-edFaAAAe_sK?format=jpg&name=large",
	},
];

const Footer = () => {
	return (
		<footer className="section">
			<div className="container">
				<div className="lg:grid lg:grid-cols-[1fr_3fr] flex flex-wrap justify-center">
					<div className="mb-2">
						<p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
							Built with&nbsp;
							<a
								href="https://react.dev"
								className="text-sky-400 hover:text-sky-300 active:text-sky-400"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="React"
							>
								React&nbsp;
							</a>
							and&nbsp;
							<a
								href="https://tailwindcss.com"
								className="text-sky-400 hover:text-sky-300 active:text-sky-400"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="Tailwind"
							>
								Tailwind CSS&nbsp;
							</a>
							deployed with&nbsp;
							<a
								href="https://pages.github.com"
								className="text-sky-400 hover:text-sky-300 active:text-sky-400"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="Github Pages"
							>
								Github Pages.
							</a>
						</p>
					</div>

					<div className="pl-2">
						<div>
							<ul className="mb-6 flex flex-wrap justify-center">
								{sitemap.map(({ label, href }, key) => (
									<li key={key} className="pr-10">
										<a
											href={href}
											className="block text-md text-zinc-400 py-6 transition-colors hover:text-zinc-200"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/*						<div>
							<p className="mb-2">Socials</p>
							<ul>
								{socials.map(({ label, href }, key) => (
									<li key={key}>
										<a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
											{label}
										</a>
									</li>
								))}
							</ul>
						</div> */}
					</div>
				</div>

				{/* 				<div className="flex items-center justify-between pt-10 mb-8 pb-2">
					<a href="" className="">
						<img src={import.meta.env.BASE_URL + "/images/logo.svg"} width={40} height={40} alt="Logo" />
					</a>
                    <p className="text-zinc-500 text-sm">
                        &copy; 2024 <span className="text-zinc-200">Brid Andrei Guiruela</span>
                    </p>
				</div>*/}
			</div>
		</footer>
	);
};

export default Footer;
