import Link from "next/link";
import Head from "next/head";

// Components
import Container from "@/components/common/placement/Container";
import HeroSection from "@/components/features/HeroSection";

function GenresPage() {
	return (
		<>
			<Head>
				<title>Nook Books | Genres</title>
				<meta
					name="description"
					content="Quickly and easily browse a wide range of book genres on Book Nook. Discover your next read without distractions and without getting influenced by the rating."
				/>
			</Head>
			<HeroSection
				title="Genres"
				subtitle="Explore the following genres!"
			></HeroSection>
			<Container>
				<ul>
					<li>
						<Link href="/genres/fantasy">
							🦄{" "}
							<span className="link link-success">Fantasy</span> -
							Go on magical adventures
						</Link>
					</li>
					<li>
						<Link href="/genres/sci-fi">
							🌌 <span className="link link-success">Sci-fi</span>
							- Break the walls beyond reality
						</Link>
					</li>
					<li>
						<Link href="/genres/romance">
							💖{" "}
							<span className="link link-success">Romance</span> -
							Stories to make your heart flutter
						</Link>
					</li>
					<li>
						<Link href="/genres/mystery">
							🔍{" "}
							<span className="link link-success">Mystery</span> -
							Gripping page-turners
						</Link>
					</li>
					<li>
						<Link href="/genres/historical-fiction">
							📜{" "}
							<span className="link link-success">
								Historical Fiction
							</span>{" "}
							- Travel back in time
						</Link>
					</li>
					<li>
						<Link href="/genres/biography">
							📖{" "}
							<span className="link link-success">
								Biographies
							</span>{" "}
							- Learn, grow, and be inspired
						</Link>
					</li>
				</ul>
			</Container>
		</>
	);
}

export default GenresPage;

// <ul>
// 	<li> </li>
// 	<li></li>
// 	<li></li>
// 	<li></li>
// 	<li></li>
// </ul>
