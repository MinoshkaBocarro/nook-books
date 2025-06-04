import BookItem from "./BookItem";

function BookList({ books }) {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{books.map((book) => (
				<BookItem
					key={book.isbn}
					id={book.isbn}
					urlToImage={book.imageUrl}
					title={book.title}
				/>
			))}
		</div>
	);
}

export default BookList;
