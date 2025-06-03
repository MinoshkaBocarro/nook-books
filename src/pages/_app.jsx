// modules
import Script from "next/script";

// components
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
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
