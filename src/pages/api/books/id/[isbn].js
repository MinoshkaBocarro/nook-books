import { books } from "../../../../database/db";

function handler(req, res) {
	const { isbn } = req.query;

	if (req.method === "GET") {
		const book = books.find((item) => item.isbn === isbn);

		if (book) {
			res.status(200).json(book);
		} else {
			res.status(404).json({ message: "Book not found" });
		}
	}
}

export default handler;
