// Components
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
	return (
		<div className="box-border flex flex-col min-h-screen font-primary bg-background">
			<Header />
			<main className="container px-20 mx-auto my-10 grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
