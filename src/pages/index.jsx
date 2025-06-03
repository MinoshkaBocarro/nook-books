import Head from "next/head";

function HomePage() {
	return (
		<>
			<Head>
				<title>Nook Books | Home</title>
				<meta
					name="description"
					content="Find your next great read with Nook Books - your online destination for exploring book genres and discovering new books. Browse suggestions from all the genres from fiction to non-fiction and everything in between"
				/>
			</Head>
			<h1>Welcome to Nook Books</h1>
			<h2>Discover your next favourite read</h2>
			<p>
				Discover a world of stories, knowledge and imagination. Whether
				you're into thrilling mysteries, epic fantasy, thought-provoking
				non-fiction or heartwarming romance, Nook Books has something to
				suggest for every kind of reader.
			</p>
			<h2>Explore by Genre</h2>
			<p>
				Looking for something specific? Dive into our curated genres and
				find the perfect book for your mood:
			</p>
			<ul>
				<li>📚 Fiction -From contemporary to classics</li>
				<li>🔍 Mystery & Thriller -Gripping page-turners</li>
				<li>
					🌌 Science Fiction & Fantasy - Adventures beyond reality
				</li>
				<li>💖 Romance - Stories to make your heart flutter</li>
				<li>📖 Non-Fiction - Learn, grow, and be inspired</li>
			</ul>
			<h2>Start Your Journey</h2>
			<p>
				Browse our genres, read our recommendations, and rediscover the
				joy of reading.
			</p>
			<button>👉 [Explore Genres]</button>
		</>
	);
}

export default HomePage;
