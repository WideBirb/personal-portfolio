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
	}
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
	}
];

const Footer = () => {
	return (
		<footer className="section">
			<div className="container">
				<div className="lg:grid lg:grid-cols-2">
					<div className="mb-10">
						<h2 className="headline-2 mb-8 lg:max-w-[12ch]">asd</h2>
					</div>

					<div className="grid grid-cols-2 gap-4 lg:pl-20">
						<div>
							<p className="mb-2">Sitemap</p>
							<ul className="mb-6">
								{sitemap.map(({ label, href }, key) => (
									<li key={key}>
										<a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
											{label}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
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
						</div>
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
