import Head from "next/head";

// Components
import BookList from "@/components/features/bookGenres/BookList";
import HeroSection from "@/components/features/HeroSection";

function FantasyPage({ books }) {
	return (
		<>
			<Head>
				<title>Nook Books | Fantasy</title>
				<meta
					name="description"
					content="Immerse yourself in magical realms and epic adventures with mythical creatures with our fantasy books. Explore high fantasy, urban fantasy, epic fantasy, sword and sorcery and magic books"
				/>
			</Head>
			<HeroSection title="Fantasy" />
			<div className="pt-10 px-31">
				<BookList books={books} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(
		`${process.env.SERVER_NAME}/api/books/genres/fantasy/`
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

export default FantasyPage;
