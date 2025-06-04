import HeroSection from "@/components/common/placement/HeroSection";
import Head from "next/head";

function HomePage() {
	return (
		<>
			<Head>
				<title>Nook Books | Home</title>
				<meta
					name="description"
					content="Find your next great read with Nook Books - the best site for exploring book genres and discovering new books. Browse suggestions from all the genres from fiction with epic fantasy, sci-fi, heartwarming romance, thrilling mystery, historical-fiction to thought provoking non-fiction biographies!"
				/>
			</Head>
			<HeroSection
				title="Welcome to"
				subtitle="A world of stories, knowledge and imagination awaits. Discover your next favourite read!"
				buttonContent="Start Your Journey"
				buttonPath="/genres"
			></HeroSection>
			<div
				className="w-[100vw] h-[130px] bg-repeat-x bg-contain"
				style={{ backgroundImage: "url('/hero-edge-bottom.jpg')" }}
			></div>
		</>
	);
}

export default HomePage;
