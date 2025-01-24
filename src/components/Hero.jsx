import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
	return (
		<section id="home" className="lg:pt-25">
			<div className="container items-center lg:grid lg:grid-cols-2 lg:gap-24 sm:mt-24 lg:mt-0 lg:h-screen sm:min-h-fit">
				<div>
					<div className="flex items-center gap-3">
						<figure className="img-box w-9 h-9 rounded-lg">
							<img
								src={import.meta.env.BASE_URL + "/images/me-icon.png"}
								width={40}
								height={40}
								alt="Alt"
								className="img-cover"
							/>
						</figure>
						<div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
							<span className="relative w-2 h-2 rounded-full bg-emerald-400">
								<span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
							</span>
							Looking for Internships!
						</div>
					</div>
					<h2 className=" headline-1 max-w-[15ch] sm:max-w[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
						Hi! I'm Brid Guiruela
					</h2>
					<p className="text-zinc-300 mb-4 md:mb-4 md:text-xl mdLmax-w-[60ch]">
						I’m currently studying at Southville International Schools and
						Colleges where I’m developing skills in 
						<span className="text-sky-400">&nbsp;Web Application</span> and 
						<span className="text-sky-400">&nbsp;Machine Learning</span>. I'm
						focusing on becoming a Full-Stack Developer with expertise in
						building Single Page Applications with
						<span className="text-sky-400">&nbsp;React&nbsp;</span>along with
						<span className="text-sky-400">&nbsp;.NET</span>. for back-end
						development.
					</p>

					{/*					<div className="flex items-center gap-3">
						<ButtonPrimary
							label="Download CV"
							icon="download"
							classes="custom class"
							href={import.meta.env.BASE_URL + "/images/CV.pdf"}
						/>
					</div> */}
				</div>

				<div className="hidden lg:block">
					<figure className="w-auto-">
						<img
							src={import.meta.env.BASE_URL + "/images/smol.png"}
							width={650}
							height={500}
							alt="alt"
							className="w-full rounded-2xl opacity-80 border-4 border-transparent transition-all duration-100 hover:border-sky-500 hover:border-8 hover:opacity-100"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Hero;
