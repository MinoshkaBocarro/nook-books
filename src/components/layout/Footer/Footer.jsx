function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<footer className="p-2 text-center bg-teal-400 shadow-[0_-3px_6px_-1px_rgba(0,0,0,0.2)]">
			<div>&copy; {getCurrentYear()} Nook Books</div>
		</footer>
	);
}

export default Footer;
