function BookDetailPage({ book }) {
	const { title, series, bookNumber, imageUrl, author, description, genre } =
		book;
	return (
		<>
			<p>This is a book detail page</p>
			<div>{title}</div>
			<div>{series}</div>
			<div>{bookNumber}</div>
			<div>{imageUrl}</div>
			<div>{author}</div>
			<div>{description}</div>
		</>
	);
}

export const getStaticProps = async (context) => {
	console.log("static props is runnnnnnning");
	const bookQuery = context.params.isbn;

	const response = await fetch(
		`${process.env.SERVER_NAME}/api/books/id/${bookQuery}`
	);
	const book = await response.json();

	if (!response.ok) {
		throw new Error(
			`Failed to fetch book - Error ${response.status}:${data.message}`
		);
	}
	return {
		props: { book: book },
	};
};

export const getStaticPaths = async () => {
	const response = await fetch(`${process.env.SERVER_NAME}/api/books/`);
	const books = await response.json();

	if (!response.ok) {
		throw new Error(
			`Failed to fetch books - Error ${response.status}:${books.message}`
		);
	}

	const idList = books.map((book) => {
		return book.isbn;
	});

	const paths = idList.map((id) => ({
		params: {
			isbn: id,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default BookDetailPage;
