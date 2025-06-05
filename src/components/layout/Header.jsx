import Image from "next/image";
import Link from "next/link";

function Header() {
	return (
		<header className="bg-prime text-text drop-shadow-md">
			<div className="container flex flex-row items-center justify-between px-20 mx-auto">
				<div className="py-4">
					<Link
						href="/"
						className="flex flex-row items-center hover:text-brand"
					>
						<div className="flex">
							<Image
								className="relative left-2 rotate-6"
								src="/logo.jpg"
								alt="Nook Books' logo"
								width={12.4}
								height={36}
							/>
							<span className="-mr-10 text-4xl font-brand">
								Nook Books
							</span>
						</div>
					</Link>
				</div>
				<nav className="text-2xl uppercase font-heading">
					<ul className="flex flex-row ">
						<li className="p-4 pl-3 pr-3 hover:text-brand">
							<Link href="/about">About</Link>
						</li>
						<li className="p-4 pl-3 pr-3 hover:text-brand">
							<Link href="/genres">Genres</Link>
						</li>
						<li className="p-4 pl-3 pr-3 hover:text-brand">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
