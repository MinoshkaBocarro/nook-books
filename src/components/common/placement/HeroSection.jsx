import Image from "next/image";
import NBButtonLink from "../util/NBButtonLink";

function HeroSection({ title, subtitle, buttonContent, buttonPath }) {
	return (
		<div className="flex flex-col items-center px-40 shadow-[0_0_5px_10px_rgba(0,0,0,0.2)] bg-second/20 shadow-pink-50 py-15 text-center gap-9">
			<h1 className="flex flex-col items-center gap-3 font-heading">
				<div className="pl-10 text-5xl">{title}</div>
				<div className="flex">
					<Image
						className="relative w-auto h-17 left-4 rotate-6"
						src="/logo.jpg"
						alt="Nook Books' logo"
						width="1372"
						height="3982"
					/>
					<span className="-mr-10 text-7xl font-brand">
						Nook Books
					</span>
				</div>
			</h1>
			<div>{subtitle}</div>
			{buttonContent && (
				<NBButtonLink path={buttonPath}>{buttonContent}</NBButtonLink>
			)}
		</div>
	);
}

export default HeroSection;
