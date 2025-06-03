// Components
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
	return (
		<div className="box-border flex flex-col min-h-screen font-primary bg-background">
			<Header />
			<main className="mx-auto h-[calc(100vh-192px)] my-10 flex flex-col text-2xl">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
