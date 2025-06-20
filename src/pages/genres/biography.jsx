import Head from "next/head";

// Components
import BookList from "@/components/features/bookGenres/BookList";
import HeroSection from "@/components/features/HeroSection";

function BiographyPage({ books }) {
	return (
		<>
			<Head>
				<title>Nook Books | Biography</title>
				<meta
					name="description"
					content="Discover inspiring real-life stories with our collection of biography books. Explore fascinating lives on Nook Books with autobiographies, memoirs, biographies of historical figures and true stories"
				/>
			</Head>
			<HeroSection title="Biography" />
			<div className="pt-10 px-31">
				<BookList books={books} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(
		`${process.env.SERVER_NAME}/api/books/genres/biography/`
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

export default BiographyPage;
