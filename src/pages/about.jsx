import Image from "next/image";

// components
import HeroSection from "@/components/common/placement/HeroSection";

function AboutPage() {
	return (
		<>
			<div
				className="w-[100vw] h-[130px] bg-repeat-x bg-contain"
				style={{ backgroundImage: "url('/hero-edge-top.jpg')" }}
			></div>
			<HeroSection
				title="About"
				subtitle="Creating a welcoming, cozy space for all
				bookworms to browse books to their hearts' content."
			/>
			<div className="flex justify-center w-full">
				<div className="flex items-center justify-center gap-10 px-20 pt-20 max-w-300 min-w-215">
					<Image
						src="/about-page-bookshelf.jpg"
						alt="A cute cartoon bookshelf"
						width={2000}
						height={2000}
						className="object-scale-down w-auto h-68"
					/>
					<p className="container text-center padding">
						I wanted to make browsing and exploring different genres
						effortless and harken back to the days when we slowly
						trailed along the library shelves. When we judged a book
						by its cover and not its rating. Because I believe that
						reading is a pleasure, never a guilty one.
					</p>
				</div>
			</div>
		</>
	);
}

export default AboutPage;
