// Components
import Footer from "./Footer";
import Header from "./Header";

import { Bree_Serif, Nunito, Pacifico } from "next/font/google";

const breeSerif = Bree_Serif({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	variable: "--font-breeSerif",
});

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	style: ["normal"],
	variable: "--font-nunito",
});

const pacifico = Pacifico({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	variable: "--font-pacifico",
});

function Layout({ children }) {
	return (
		<div
			className={`box-border flex flex-col min-h-screen font-primary bg-background ${breeSerif.variable} ${pacifico.variable} ${nunito.variable}`}
		>
			<Header />
			<main className="flex flex-col mx-auto my-10 text-2xl grow">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default Layout;
