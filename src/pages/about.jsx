import Image from "next/image";

// components
import HeroSection from "@/components/common/placement/HeroSection";
import Container from "@/components/common/placement/Container";

function AboutPage() {
	return (
		<>
			<HeroSection
				title="About"
				subtitle="Creating a welcoming, cozy space for all
				bookworms to browse books to their hearts' content."
			/>
			<Container>
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
					trailed along the library shelves. When we judged a book by
					its cover and not its rating. Because I believe that reading
					is a pleasure, never a guilty one.
				</p>
			</Container>
		</>
	);
}

export default AboutPage;
