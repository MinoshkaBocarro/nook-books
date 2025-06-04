// Components
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
	return (
		<div className="box-border flex flex-col min-h-screen font-primary bg-background">
			<Header />
			<main className="flex flex-col mx-auto my-10 text-2xl grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
