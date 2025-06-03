function FantasyPage({ books }) {
	return (
		<div>
			<p>This is a fantasy page</p>
			{/* {books.length > 0 &&
				books.map((book) => <p key={book.isbn}>{book.title}</p>)} */}
		</div>
	);
}

// export const getStaticProps = async () => {
// 	const response = await fetch(
// 		`${process.env.SERVER_NAME}/api/books/genres/fantasy/`
// 	);
// 	const data = await response.json();

// 	console.log(data);

// 	if (!response.ok) {
// 		throw new Error(
// 			`Failed to fetch books - Error ${response.status}: ${data.message}`
// 		);
// 	}
// 	return {
// 		props: { books: data },
// 		revalidate: 60 * 60,
// 	};
// };

export default FantasyPage;
