import Image from "next/image";
import NBButtonLink from "../common/util/NBButtonLink";

function HeroSection({
	title,
	subtitle,
	buttonContent,
	buttonPath,
	children,
	logo = false,
}) {
	return (
		<div>
			<div
				className="w-[100vw] h-[130px] bg-repeat-x bg-contain"
				style={{ backgroundImage: "url('/hero-edge-top.jpg')" }}
			></div>

			<div className="flex flex-col items-center px-40 shadow-[0_0_5px_10px_rgba(0,0,0,0.2)] bg-second/20 shadow-pink-50 py-15 text-center gap-9">
				<h1 className="flex flex-col items-center gap-3 font-heading">
					<div className="text-5xl">{title}</div>
					{logo && (
						<div className="flex pt-4 pr-10">
							<Image
								className="relative left-4"
								src="/logo.jpg"
								alt="Nook Books' logo"
								width={23.31}
								height={68}
							/>
							<span className="-mr-10 text-7xl font-brand">
								Nook Books
							</span>
						</div>
					)}
				</h1>
				{subtitle && <div>{subtitle}</div>}
				{buttonContent && (
					<NBButtonLink path={buttonPath}>
						{buttonContent}
					</NBButtonLink>
				)}
				{children}
			</div>
		</div>
	);
}

export default HeroSection;
