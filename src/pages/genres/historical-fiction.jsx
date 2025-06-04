import BookList from "@/components/features/bookGenres/BookList";
import HeroSection from "@/components/features/HeroSection";

function HistoricalFictionPage({ books }) {
	return (
		<>
			<HeroSection title="Historical Fiction" />
			<div className="pt-10 px-31">
				<BookList books={books} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(
		`${process.env.SERVER_NAME}/api/books/genres/historical-fiction/`
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

export default HistoricalFictionPage;
