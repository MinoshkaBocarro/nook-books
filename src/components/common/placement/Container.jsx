function Container({ children }) {
	return (
		<div className="flex justify-center w-full">
			<div className="flex items-center justify-center gap-10 px-20 pt-20 max-w-300 min-w-215">
				{children}
			</div>
		</div>
	);
}

export default Container;
