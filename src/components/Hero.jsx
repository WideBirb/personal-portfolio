import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
	return (
		<section id="home" className="pt-28 lg:pt-25">
			<div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 my-6">
				<div>
					<div className="flex items-center gap-3">
						<figure className="img-box w-9 h-9 rounded-lg">
							<img
								src={import.meta.env.BASE_URL + "/images/avatar-1.jpg"}
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
							Available for work
						</div>
					</div>
					<h2 className=" headline-1 max-w-[15ch] sm:max-w[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
						Portfolio ni spongebob movie
					</h2>

					<div className="flex items-center gap-3">
						<ButtonPrimary label="Download CV" icon="download" />
						<ButtonOutline
							href="about"
							label="About Me"
							icon="arrow_downward"
						></ButtonOutline>
					</div>
				</div>

				<div className="hidden lg:block">
					<figure className="w-full">
            
						<img
							src={import.meta.env.BASE_URL + "/images/hero-banner.jpg"}
							width={650}
							height={500}
							alt="alt"
							className="w-full rounded-2xl bg-emerald-400 animate-ping"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Hero;
