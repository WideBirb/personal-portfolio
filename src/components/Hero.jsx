import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
	return (
		<section id="home" className="pt-20 lg:pt-25">
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
							Online
						</div>
					</div>
					<h2 className=" headline-1 max-w-[15ch] sm:max-w[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
						CURSE OF RA
					</h2>
					<p className="text-zinc-300 mb-4 md:mb-4 md:text-xl mdLmax-w-[60ch]">
						don't care. CURSE OF RA 𓀀 𓀁 𓀂 𓀃 𓀄 𓀅 𓀆 𓀇 𓀈 𓀉 𓀊 𓀋 𓀌 𓀍 𓀎 𓀏 𓀐 𓀑 𓀒 𓀓 𓀔 𓀕
						𓀖 𓀗 𓀘 𓀙 𓀚 𓀛 𓀜 𓀝 𓀞 𓀟 𓀠 𓀡 𓀢 𓀣 𓀤 𓀥 𓀦 𓀧 𓀨 𓀩 𓀪 𓀫 𓀬 𓀭 𓀮 𓀯 𓀰 𓀱 𓀲 𓀳 𓀴 𓀵 𓀶 𓀷
						𓀸 𓀹 𓀺 𓀻 𓀼 𓀽 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 𓁆 𓁇 𓁈 𓁉 𓁊 𓁋 𓁌 𓁍 𓁎 𓁏 𓁐 𓁑 𓀄 𓀅 𓀆
					</p>

					<div className="flex items-center gap-3">
						<ButtonPrimary
							label="Download CV"
							icon="download"
							classes="custom class"
							href={import.meta.env.BASE_URL + "/images/CV.pdf"}
						/>
					</div>
				</div>

				<div className="hidden lg:block">
					<figure className="w-full">
						<img
							src={import.meta.env.BASE_URL + "/images/option-4.jpg"}
							width={650}
							height={500}
							alt="alt"
							className="w-full rounded-2xl bg-emerald-400"
						/>
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Hero;
