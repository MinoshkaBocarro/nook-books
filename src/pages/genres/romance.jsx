import Head from "next/head";

// Components
import BookList from "@/components/features/bookGenres/BookList";
import HeroSection from "@/components/features/HeroSection";

function RomancePage({ books }) {
	return (
		<>
			<Head>
				<title>Nook Books | Romance</title>
				<meta
					name="description"
					content="Find heartwarming romance novels and captivating love stories. Browse contemporary romance books on Nook Books!"
				/>
			</Head>
			<HeroSection title="Romance" />
			<div className="pt-10 px-31">
				<BookList books={books} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const response = await fetch(
		`${process.env.SERVER_NAME}/api/books/genres/romance/`
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

export default RomancePage;
