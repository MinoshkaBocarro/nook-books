// modules
import Script from "next/script";
import { useRouter } from "next/router";

import * as ga from "../lib/google-analytics";

// components
import Layout from "@/components/layout";

// styles
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRoutedChange = (url) => {
			ga.pageView(url);
		};

		router.events.on("routeChangeComplete", handleRoutedChange);

		return () => {
			router.events.off("routeChangeComplete", handleRoutedChange);
		};
	}, []);

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics-script" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
			</Script>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
