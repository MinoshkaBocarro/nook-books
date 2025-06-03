import Link from "next/link";

function Header() {
	return (
		<>
			<header>
				<div>
					<Link href="/">Nook Books</Link>
				</div>
				<nav>
					<ul>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/genres">Genres</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
