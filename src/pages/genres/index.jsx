import Link from "next/link";

function GenresPage() {
	return (
		<>
			<h1>Genres</h1>
			<h2>Explore the following genres!</h2>
			<ul>
				<li>
					<Link href="/genres/fantasy">Fantasy</Link>
				</li>
				<li>
					<Link href="/genres/science-fiction">Science Fiction</Link>
				</li>
				<li>
					<Link href="/genres/romance">Romance</Link>
				</li>
				<li>
					<Link href="/genres/mystery">Mystery</Link>
				</li>
				<li>
					<Link href="/genres/historical-fiction">
						Historical Fiction
					</Link>
				</li>
				<li>
					<Link href="/genres/biographies">Biographies</Link>
				</li>
			</ul>
		</>
	);
}

export default GenresPage;
