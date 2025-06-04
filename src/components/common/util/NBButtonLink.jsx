import Link from "next/link";

function NBButtonLink({ children, path }) {
	return (
		<Link href={path} className="text-xl font-bold btn btn-accent">
			{children}
		</Link>
	);
}

export default NBButtonLink;
