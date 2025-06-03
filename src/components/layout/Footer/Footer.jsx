function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<footer>
			<div>&copy; {getCurrentYear()} Nook Books</div>
		</footer>
	);
}

export default Footer;
