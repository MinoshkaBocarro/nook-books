import Head from "next/head";

// Components
import BookList from "@/components/features/bookGenres/BookList";
import HeroSection from "@/components/features/HeroSection";

function MysteryPage({ books }) {
	return (
		<>
			<Head>
				<title>Nook Books | Mystery</title>
				<meta
					name="description"
					content="Unravel intriguing plots and dastardly intentions with this collection of mystery books. Discover thrilling whodunits alongside detectives, suspenseful reads in crime fiction and mind benders in psychological thrillers here at Nook Books."
				/>
			</Head>
			<HeroSection title="Mystery" />
			<div className="pt-10 px-31">
				<BookList books={books} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(
		`${process.env.SERVER_NAME}/api/books/genres/mystery/`
	);
	const data = await response.json();

	if (!response.ok) {
		throw new Error(
			`Failed to fetch books - Error ${response.status}: ${data.message}`
		);
	}
	return {
		props: { books: data },
		revalidate: 60 * 60,
	};
};

export default MysteryPage;
