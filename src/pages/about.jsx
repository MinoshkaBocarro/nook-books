import Image from "next/image";

// components
import HeroSection from "@/components/features/HeroSection";
import Container from "@/components/common/placement/Container";

function AboutPage() {
	return (
		<>
			<HeroSection
				title="About"
				logo={true}
				subtitle="Creating a welcoming, cozy space for all
				bookworms to browse books to their hearts' content."
			/>
			<Container>
				<Image
					src="/about-page-bookshelf.webp"
					alt="A cute cartoon bookshelf"
					width={272}
					height={272}
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
