import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function BookDetailPage({ book }) {
	const { title, series, bookNumber, imageUrl, author, description, genre } =
		book;
	return (
		<>
			<Head>
				<title>{`Nook Books | ${title}`}</title>
				<meta
					name="description"
					content={`Discover the book ${title} by ${author}. Read the synopsis and explore this book without getting influenced by other reviews on Nook Books`}
				/>
			</Head>
			<div className="grid grid-cols-1 md:grid-cols-[155px_minmax(200px,_1fr)] gap-6 p-6 mx-auto max-w-7xl">
				<div className="md:col-span-1">
					{" "}
					<Link href={`/genres/${genre}`}>
						<Image
							src="/book-detail-bookshelf.webp"
							alt={`Back to ${genre}`}
							width={154.31}
							height={80}
						></Image>
					</Link>
				</div>
				<div className="flex flex-col gap-8 rounded-md md:flex-row bg-second/20">
					<div className="flex items-center justify-center flex-shrink-0 w-full md:w-2/5">
						<div className="relative w-full max-w-[450px] aspect-[350/525] overflow-hidden">
							<Image
								src={imageUrl}
								alt={title}
								fill={true}
								className="object-contain"
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 350px"
								priority
							/>
						</div>
					</div>
					<div className="flex flex-col gap-6 p-4 md:w-2/3">
						<h1 className="self-center text-5xl font-heading">
							{title}
						</h1>
						<div className="flex flex-col gap-2">
							{series !== "Standalone" && (
								<p className="text-base">
									<span className="font-semibold">
										Series:
									</span>{" "}
									{`#${bookNumber} ${series}`}
								</p>
							)}
							<p className="text-base">
								<span className="font-semibold">Author:</span>{" "}
								{author}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							{description.map((para) => (
								<p>{para}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export const getStaticProps = async (context) => {
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
