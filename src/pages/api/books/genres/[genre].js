import { books } from "../../../../database/db";

function handler(req, res) {
	const { genre } = req.query;

	if (req.method === "GET") {
		const genreBooks = books.filter((item) => {
			return item.genre === genre;
		});
		if (genreBooks.length > 0) {
			res.status(200).json(genreBooks);
		} else {
			res.status(404).json({ message: "Genre not found" });
		}
	}
}

export default handler;
